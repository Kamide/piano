import { css, CSSResultGroup, html, LitElement, PropertyDeclarations, TemplateResult } from 'lit';
import { styleMap } from 'lit/directives/style-map';
import { Synthesizer, SynthesizerNote, SynthesizerOscillator } from '../synthesizer/index';
import { KeyToNoteNumber } from './key-to-note-number';
import { PianoKey } from './piano-key';

/**
 * @todo Handle caps lock
 */
export class PianoKeyboard extends LitElement {
	public static tagName = 'piano-keyboard';
	public static dependencies: Array<CustomElementConstructor> = [PianoKey];

	public static properties: PropertyDeclarations = {
		synthesizer: { type: Synthesizer },
		minimumNoteDuration: { type: Number, attribute: 'minimum-note-duration', reflect: true },
		labelSource: { type: String, attribute: 'label-source', reflect: true },
	};

	declare private synthesizer: Synthesizer | null;
	declare private minimumNoteDuration: number;
	declare private labelSource: string;
	declare private keyToNoteNumberMap: Map<string, number>;
	declare private keyToOscillatorMap: Map<string, SynthesizerOscillator>;

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

		if (this.synthesizer instanceof Synthesizer && oscillator instanceof SynthesizerOscillator) {
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

	private keyUpListener(event: KeyboardEvent): void {
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

		const style = styleMap({
			gridRowStart: String(8 - row - 1),
			gridRowEnd: `span ${rowSpan}`,
			gridColumnStart: String(column + 1),
			gridColumnEnd: 'span 2',
			zIndex: String(zIndex),
		});

		return html`
			<piano-key note-number=${noteNumber} key='${key}' ?down='${this.keyToOscillatorMap.has(key)}' label-source='${this.labelSource}' style='${style}'></piano-key>
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
			<div part='grid'>
				${this.renderKeys()}
			</div>
		`;
	}

	static styles: CSSResultGroup = css`
		:host {
			display: block;
			touch-action: none;
		}

		[part='grid'] {
			block-size: 100%;
			box-sizing: border-box;
			display: grid;
			grid-template-columns: repeat(14, 1fr);
			grid-template-rows: repeat(8, 1fr);
			inline-size: 100%;
			padding-block-end: 0.75em;
			padding-block-start: 0.125em;
			padding-inline: 0.25em;
			transition: opacity 0.125s;
		}

		:host(:not(:focus):not(:focus-within)) [part='grid'] {
			opacity: 0.5;
		}
	`;
}

customElements.define(PianoKeyboard.tagName, PianoKeyboard);
