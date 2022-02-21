import { CSSResultGroup, html, LitElement, PropertyDeclarations, PropertyValues, TemplateResult } from 'lit';

import { getLogicalCoord, getLogicalRect, LogicalCoord, LogicalRect } from '../dom/index';
import styles from './ui-modal.css';

class UiModal extends LitElement {
	public static tagName = 'ui-modal';
	public static styles: CSSResultGroup = styles;

	public static properties: PropertyDeclarations = {
		closeEvent: { type: String, attribute: 'close-event', reflect: true },
		parent: { type: Element },
		parentInlineOffset: { type: Number, attribute: 'i0', reflect: true },
		parentBlockOffset: { type: Number, attribute: 'b0', reflect: true },
		inlineOffset: { type: Number, attribute: 'i1', reflect: true },
		blockOffset: { type: Number, attribute: 'b1', reflect: true },
	};

	private closeEvent: string;
	private parent: Element;
	private parentInlineOffset: number;
	private parentBlockOffset: number;
	private inlineOffset: number;
	private blockOffset: number;
	private resizeObserver: ResizeObserver;

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

	private close(event: PointerEvent): void {
		if (event.buttons === 1 && this.closeEvent.length > 0) {
			this.dispatchEvent(new CustomEvent(this.closeEvent, { bubbles: true }));
		}
	}

	protected render(): TemplateResult {
		return html`
			<div part="grid">
				<div part="head">
					<span part="title">
						<slot name="title"></slot>
					</span>
					<button
						part="close-button"
						@pointerdown="${this.close}"
					>
						<slot name="close-button">✖</slot>
					</button>
				</div>
				<div part="body">
					<slot name="body"></slot>
				</div>
			</div>
		`;
	}
}

customElements.define(UiModal.tagName, UiModal);

export { UiModal };
