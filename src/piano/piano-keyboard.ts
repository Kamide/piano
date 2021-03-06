import { CSSResultGroup, html, LitElement, PropertyDeclarations, TemplateResult } from 'lit';

import { Synthesizer, SynthesizerNote, SynthesizerOscillator } from '../synthesizer/index';
import { KeyToNoteNumber } from './key-to-note-number';
import { PianoKey } from './piano-key';
import styles from './piano-keyboard.css';

/**
 * @todo Handle caps lock
 */
class PianoKeyboard extends LitElement  {
	public static tagName = 'piano-keyboard';
	public static dependencies: Array<CustomElementConstructor> = [PianoKey];
	public static styles: CSSResultGroup = styles;

	public static properties: PropertyDeclarations = {
		synthesizer: { type: Synthesizer },
		minimumNoteDuration: { type: Number, attribute: 'minimum-note-duration', reflect: true },
		labelSource: { type: String, attribute: 'label-source', reflect: true },
	};

	private synthesizer: Synthesizer | null;
	private minimumNoteDuration: number;
	private labelSource: string;
	private keyToNoteNumberMap: Map<string, number>;
	private keyToOscillatorMap: Map<string, SynthesizerOscillator>;

	public constructor() {
		super();
		this.synthesizer = null;
		this.minimumNoteDuration = 0.2;
		this.labelSource = 'names';
		this.keyToNoteNumberMap = KeyToNoteNumber.QWERTY;
		this.keyToOscillatorMap = new Map();
	}

	protected firstUpdated(changedProperties: Map<PropertyKey, unknown>): void {
		super.firstUpdated(changedProperties);
		this.addEventListener('keydown', this.keyDownListener);
		this.addEventListener('keyup', this.keyUpListener);
		this.addEventListener('blur', this.blurListener);
	}

	private startOscillator(key: string): boolean {
		if (this.synthesizer instanceof Synthesizer && !this.keyToOscillatorMap.has(key)) {
			const noteNumber: number | undefined = this.keyToNoteNumberMap.get(key);

			if (typeof noteNumber === 'number') {
				const oscillator = this.synthesizer.startOscillator(noteNumber, this.synthesizer.currentTime);
				this.keyToOscillatorMap.set(key, oscillator);
				this.requestUpdate();
				return true;
			}
		}

		return false;
	}

	private stopOscillator(key: string): boolean {
		const oscillator: SynthesizerOscillator | undefined = this.keyToOscillatorMap.get(key);

		if (this.synthesizer instanceof Synthesizer &&  oscillator instanceof SynthesizerOscillator) {
			const stopTime = this.synthesizer.currentTime + Math.max(0, this.minimumNoteDuration - oscillator.duration);
			this.synthesizer.stopOscillator(oscillator, stopTime);
			this.keyToOscillatorMap.delete(key);
			this.requestUpdate();
			return true;
		}

		return false;
	}

	private stopAllOscillators(): void {
		if (this.synthesizer instanceof Synthesizer) {
			for (const [key, oscillator] of this.keyToOscillatorMap) {
				this.synthesizer.stopOscillator(oscillator);
				this.keyToOscillatorMap.delete(key);
			}

			this.requestUpdate();
		}

	}

	private keyDownListener(event: KeyboardEvent): void {
		if (!(event.ctrlKey || event.altKey || event.shiftKey)) {
			this.startOscillator(event.key) && event.preventDefault();
		}
	}

	private keyUpListener (event: KeyboardEvent): void {
		if (!(event.ctrlKey || event.altKey || event.shiftKey)) {
			this.stopOscillator(event.key) && event.preventDefault();
		}
	}

	private blurListener() {
		this.stopAllOscillators();
	}

	protected renderKey(key: string, noteNumber: number) {
		const row = Math.floor(noteNumber / 12) * 2;
		let rowSpan: number;
		let column = noteNumber % 12;
		let zIndex: number;

		if (SynthesizerNote.isNatural(column)) {
			if (column >= 5) {
				column += 1;
			}

			rowSpan = 2;
			zIndex = row;
		}
		else {
			if (column >= 6) {
				column += 1;
			}

			rowSpan = 1;
			zIndex = row + 1;
		}

		const style = `
			grid-row-start: ${8 - row - 1};
			grid-row-end: span ${rowSpan};
			grid-column-start: ${column + 1};
			grid-column-end: span 2;
			z-index: ${zIndex};
		`;

		return html`
			<piano-key
				note-number=${noteNumber}
				key="${key}"
				.down="${this.keyToOscillatorMap.has(key)}"
				label-source="${this.labelSource}"
				style="${style}"
			></piano-key>
		`;
	}

	protected renderKeys(): Array<TemplateResult> {
		const results = [];

		for (const [key, noteNumber] of this.keyToNoteNumberMap) {
			results.push(this.renderKey(key, noteNumber));
		}

		return results;
	}

	protected render(): TemplateResult {
		return html`
			<div part="grid">
				${this.renderKeys()}
			</div>
		`;
	}
}

customElements.define(PianoKeyboard.tagName, PianoKeyboard);

export { PianoKeyboard };
