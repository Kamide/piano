import { CSSResultGroup, html, LitElement, PropertyDeclarations, TemplateResult } from 'lit';

import { SynthesizerNote } from '../synthesizer/index';
import styles from './piano-key.css';

class PianoKey extends LitElement {
	public static tagName = 'piano-key';
	public static styles: CSSResultGroup = styles;

	public static properties: PropertyDeclarations = {
		noteNumber: { type: Number, attribute: 'note-number', reflect: true },
		key: { type: String, reflect: true },
		down: { type: Boolean, reflect: true },
		labelSource: { type: String, attribute: 'label-source', reflect: true },
	};

	private noteNumber: number;
	private key: string;
	private down: boolean;
	private labelSource: string;

	public constructor() {
		super();
		this.noteNumber = 0;
		this.key = '';
		this.down = false;
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

	public get buttonParts(): string {
		const parts: Array<string> = ['key'];
		this.down && parts.push('down');
		this.natural && parts.push('natural');
		this.accidental && parts.push('accidental');
		return parts.join(' ');
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
			<span part="label">
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
			<button
				part=${this.buttonParts}
				@pointerdown="${this.start}"
				@pointerup="${this.stop}"
				@pointerenter="${this.start}"
				@pointerleave="${this.stop}"
				tabindex="-1"
			>
				<span part="labels">
					${this.renderLabels()}
				</span>
			</button>
		`;
	}
}

customElements.define(PianoKey.tagName, PianoKey);

export { PianoKey };
