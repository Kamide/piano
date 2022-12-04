import { css, CSSResultGroup, html, LitElement, PropertyDeclarations, TemplateResult } from 'lit';
import { SynthesizerNote } from '../synthesizer/index';

export class PianoKey extends LitElement {
	public static tagName = 'piano-key';

	public static properties: PropertyDeclarations = {
		noteNumber: { type: Number, attribute: 'note-number', reflect: true },
		key: { type: String, reflect: true },
		labelSource: { type: String, attribute: 'label-source', reflect: true },
	};

	private noteNumber: number;
	private key: string;
	private labelSource: string;

	public constructor() {
		super();
		this.noteNumber = 0;
		this.key = '';
		this.labelSource = 'names';
	}

	protected firstUpdated(changedProperties: Map<PropertyKey, unknown>): void {
		super.firstUpdated(changedProperties);
	}

	public get natural(): boolean {
		return SynthesizerNote.isNatural(this.noteNumber);
	}

	public get accidental(): boolean {
		return SynthesizerNote.isAccidental(this.noteNumber);
	}

	public get names(): Array<string> {
		return SynthesizerNote.namesOf(this.noteNumber);
	}

	private start(event: PointerEvent) {
		if (event.buttons === 1) {
			(event.currentTarget as HTMLElement).focus();
			(event.target as Element).releasePointerCapture(event.pointerId);
			this.dispatchEvent(new KeyboardEvent('keydown', { composed: true, key: this.key }));
		}
	}

	private stop() {
		this.dispatchEvent(new KeyboardEvent('keyup', { composed: true, key: this.key }));
	}

	protected renderNames(): Array<TemplateResult> {
		return this.names.map(this.renderLabel);
	}

	protected renderLabel(label: string): TemplateResult {
		return html`
			<span part='label'>
				${label}
			</span>
		`;
	}

	protected renderLabels(): string | TemplateResult | Array<TemplateResult> {
		switch (this.labelSource) {
			case 'names':
				return this.renderNames();
			case 'key':
				return this.renderLabel(this.key.substring(0, 3));
			default:
				return '';
		}
	}

	protected render(): TemplateResult {
		return html`
			<button class='key ${this.natural ? 'natural' : 'accidental'}' type='button' tabindex='-1'
				@pointerdown='${this.start}'
				@pointerup='${this.stop}'
				@pointerenter='${this.start}'
				@pointerleave='${this.stop}'
			>
				<span part='labels'>
					${this.renderLabels()}
				</span>
			</button>
		`;
	}

	static styles: CSSResultGroup = css`
		:host {
			display: block;
		}

		.key {
			all: unset;
			user-select: none;
		}

		.key, [part='labels'] {
			block-size: 100%;
			box-sizing: border-box;
			inline-size: 100%;
		}

		.natural {
			--background: white;
			--border-color: hsl(0, 0%, 30%);
			--font-size: 1em;
			--text-color: black;
		}

		.accidental {
			--background: hsl(0, 0%, 10%);
			--border-color: hsl(0, 0%, 30%);
			--font-size: 0.8em;
			--text-color: white;
		}

		[part='labels'] {
			align-items: end;
			background: var(--background);
			border-radius: 0.25em;
			border: 0.0625em solid var(--border-color);
			box-shadow: 0 0.125em 0.0625em rgba(0, 0, 0, 0.3), 0 0.25em 0.125em rgba(0, 0, 0, 0.2), 0 0.5em 0.25em rgba(0, 0, 0, 0.1);
			color: var(--text-color);
			display: grid;
			font-size: var(--font-size);
			grid-template-rows: 1fr auto;
			justify-items: center;
			padding: 0.5em;
			pointer-events: none;
			transition: transform 0.125s;
		}

		:host([down]) [part='labels'] {
			transform: translateY(0.5em);
			transition: none;
		}
	`;
}

customElements.define(PianoKey.tagName, PianoKey);
