import { css, CSSResultGroup, html, LitElement, PropertyDeclarations, PropertyValues, TemplateResult } from 'lit';
import { getLogicalCoord, getLogicalRect, LogicalCoord, LogicalRect } from '../dom/index';

export class UiModal extends LitElement {
	public static tagName = 'ui-modal';

	public static properties: PropertyDeclarations = {
		closeEvent: { type: String, attribute: 'close-event', reflect: true },
		parent: { type: Element },
		parentInlineOffset: { type: Number, attribute: 'i0', reflect: true },
		parentBlockOffset: { type: Number, attribute: 'b0', reflect: true },
		inlineOffset: { type: Number, attribute: 'i1', reflect: true },
		blockOffset: { type: Number, attribute: 'b1', reflect: true },
	};

	declare private closeEvent: string;
	declare private parent: Element;
	declare private parentInlineOffset: number;
	declare private parentBlockOffset: number;
	declare private inlineOffset: number;
	declare private blockOffset: number;
	declare private resizeObserver: ResizeObserver;

	/**
	 * Left-to-right, top-to-bottom
	 *       Inline
	 *       0 ... 0.5 ... 1
	 * B   0 +------+------+
	 * l ... |             |
	 * o 0.5 +      +      +
	 * c ... |             |
	 * k   1 +------+------+
	 */

	public constructor() {
		super();
		this.closeEvent = 'close';
		this.parent = this.parentElement || document.body;
		this.parentInlineOffset = 0;
		this.parentBlockOffset = 1;
		this.inlineOffset = 0;
		this.blockOffset = 0;
		this.resizeObserver = new ResizeObserver(this.reposition);
	}

	public disconnectedCallback(): void {
		this.resizeObserver.unobserve(this.parent);
	}

	protected firstUpdated(changedProperties: Map<PropertyKey, unknown>): void {
		super.firstUpdated(changedProperties);
		this.resizeObserver.observe(this);
		this.resizeObserver.observe(this.parent);
	}

	protected updated(changedProperties: PropertyValues<unknown>): void {
		super.updated(changedProperties);
		this.reposition();
	}

	private reposition = (): void => {
		if (this.parent instanceof Element) {
			this.style.transform = '';
			const bodyRect: LogicalRect = getLogicalRect(document.body);
			const parentRect: LogicalRect = getLogicalRect(this.parent);
			const rect: LogicalRect = getLogicalRect(this);
			const { inline: i0, block: b0 }: LogicalCoord = getLogicalCoord(parentRect, this.parentInlineOffset, this.parentBlockOffset);
			const { inline: i1, block: b1 }: LogicalCoord = getLogicalCoord(rect, this.inlineOffset, this.blockOffset);
			let inlineOffset: number = i0 - i1;
			let blockOffset: number = b0 - b1;

			/**
			 *         T
			 *   +-----------+
			 *   |     t     |
			 *   |   +---+   |
			 * L | l |   | r | R
			 *   |   +---+   |
			 *   |     b     |
			 *   +-----------+
			 *         B
			 */

			// assert r < R
			if (rect.inlineEnd + inlineOffset > bodyRect.inlineEnd) {
				inlineOffset = bodyRect.inlineEnd - rect.inlineEnd;
			}

			// assert b < B
			if (rect.blockEnd + blockOffset > bodyRect.blockEnd) {
				blockOffset = bodyRect.blockEnd - rect.blockEnd;
			}

			// assert l > L
			if (rect.inlineStart + inlineOffset < bodyRect.inlineStart) {
				inlineOffset = -rect.inlineStart;
			}

			// assert t > T
			if (rect.blockStart + blockOffset < bodyRect.blockStart) {
				blockOffset = -rect.blockStart;
			}

			const inline: string = rect.writingDirection.x === 'inline' ? 'X' : 'Y';
			const block: string = rect.writingDirection.y === 'block' ? 'Y' : 'X';
			this.style.transform = `translate${inline}(${inlineOffset}px) translate${block}(${blockOffset}px)`;
		}
	};

	private close(): void {
		this.dispatchEvent(new CustomEvent(this.closeEvent, { bubbles: true }));
	}

	protected render(): TemplateResult {
		return html`
			<div part='grid'>
				<div part='head'>
					<span part='title'>
						<slot name='title'></slot>
					</span>
					<button part='close-button' type='button' @click='${this.close}'>
						<slot name='close-button'>✖</slot>
					</button>
				</div>
				<div part='body'>
					<slot name='body'></slot>
				</div>
			</div>
		`;
	}

	static styles: CSSResultGroup = css`
		:host {
			display: block;
			position: absolute;
			z-index: 1;
		}

		[part='grid'] {
			background: white;
			border-radius: 0.25em;
			box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3), 0 0.5em 1em rgba(0, 0, 0, 0.2), 0 1em 2em rgba(0, 0, 0, 0.1);
			color: black;
			overflow: auto;
		}

		[part='head'] {
			align-items: center;
			border-block-end: thin solid rgba(0, 0, 0, 0.2);
			display: grid;
			font-size: 0.8em;
			grid-template-columns: 1fr auto;
		}

		[part='close-button'] {
			all: unset;
			user-select: none;
		}

		[part='title'], [part='close-button'], [part='body'] {
			padding: 1em;
		}

		[part='title'] {
			font-weight: bold;
		}

		[part='close-button']:hover, [part='close-button']:focus {
			background: rgba(0, 0, 0, 0.1);
		}

		[part='close-button']:active {
			background: rgba(0, 0, 0, 0.2);
		}
	`;
}

customElements.define(UiModal.tagName, UiModal);
