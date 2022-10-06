import { createRef, Ref, ref } from 'lit/directives/ref';
import { CSSResultGroup, html, LitElement, PropertyDeclarations, PropertyValues, TemplateResult } from 'lit';

import { Synthesizer, SynthesizerEnvelope } from '../synthesizer';
import { UiModal, UiToggle } from '../ui/index';
import { PianoKeyboard } from './piano-keyboard';
import styles from './piano-app.css';

const defaultGainEnvelope = Object.freeze(new SynthesizerEnvelope(0, 0, 0.1, 1, 0.1, 0.8, 0.1));

/**
 * @todo Gain envelope menu
 */
class PianoApp extends LitElement {
	public static tagName = 'piano-app';
	public static version = '1.1.1';
	public static dependencies: Array<CustomElementConstructor> = [PianoKeyboard, UiModal, UiToggle];
	public static styles: CSSResultGroup = styles;

	public static waves: Array<[string, string]> = [
		['sine', 'Sine'],
		['square', 'Square'],
		['sawtooth', 'Sawtooth'],
		['triangle', 'Triangle'],
		['flute', 'Flute'],
	];

	public static frequencies: Array<[string, string]> = [
		['27.50000', '27.50 Hz (A0)'],
		['32.70320', '32.70 Hz (C1)'],
		['55.00000', '55.00 Hz (A1)'],
		['65.40639', '65.40 Hz (C2)'],
		['110.0000', '110.0 Hz (A2)'],
		['130.8128', '130.8 Hz (C3)'],
		['220.0000', '220.0 Hz (A3)'],
		['261.6256', '261.6 Hz (C4)'],
	];

	public static keyLabelSources: Array<[string, string]> = [
		['names', 'Note Names'],
		['key', 'Keyboard Shortcuts'],
		['none', 'None (Hide)'],
	];

	public static properties: PropertyDeclarations = {
		wave: { type: String, reflect: true },
		frequencyString: { type: String, attribute: 'frequency', reflect: true },
		volume: { type: Number, reflect: true },
		minimumNoteDuration: { type: Number, attribute: 'minimum-note-duration', reflect: true },
		keyLabelSource: { type: String, attribute: 'key-label-source', reflect: true },
	};

	private wave: OscillatorType | 'flute';
	private frequencyString: string;
	private volume: number;
	private minimumNoteDuration: number;

	private gainEnvelope: SynthesizerEnvelope;
	private synthesizer: Synthesizer;

	private keyLabelSource: string;
	private keyboardRef: Ref<PianoKeyboard>;

	public constructor() {
		super();
		this.wave = 'triangle';
		this.frequencyString = '130.8128';
		this.volume = 1;
		this.gainEnvelope = defaultGainEnvelope;
		this.synthesizer = new Synthesizer(this.gainEnvelope, this.wave, this.frequency);
		this.minimumNoteDuration = 0.25;
		this.keyLabelSource = 'names';
		this.keyboardRef = createRef();
	}

	public get frequency(): number {
		return Number(this.frequencyString);
	}

	private get keyboard(): PianoKeyboard {
		return this.keyboardRef.value as PianoKeyboard;
	}

	protected firstUpdated(changedProperties: PropertyValues<unknown>): void {
		super.firstUpdated(changedProperties);
		this.keyboard.focus();
	}

	protected updated(changedProperties: Map<PropertyKey, unknown>): void {
		super.updated(changedProperties);

		if (changedProperties.has('wave')) {
			if (this.wave === 'flute') {
				this.synthesizer.wave = 'triangle';
				this.gainEnvelope = new SynthesizerEnvelope(0.1, 0, 0.1, 0.8, 0.1, 0.4, 0.15);
				this.synthesizer.gainEnvelope = this.gainEnvelope;
			}
			else {
				this.synthesizer.wave = this.wave;
				this.gainEnvelope = defaultGainEnvelope;
				this.synthesizer.gainEnvelope = this.gainEnvelope;
			}
		}
		if (changedProperties.has('volume')) {
			this.synthesizer.volume = this.volume;
		}
		if (changedProperties.has('frequencyString')) {
			this.synthesizer.noteZeroFrequency = this.frequency;
		}
	}

	private setWave(event: InputEvent) {
		this.wave = (event.target as HTMLInputElement).value as OscillatorType;
	}

	private setFrequency(event: InputEvent) {
		this.frequencyString = (event.target as HTMLInputElement).value;
	}

	private setVolume(event: InputEvent) {
		this.volume = Number((event.currentTarget as HTMLInputElement).value);
	}

	private setKeyLabelSource(event: InputEvent) {
		this.keyLabelSource = (event.target as HTMLInputElement).value;
	}

	protected renderOption(selectedValue: string): ([value, label]: [string, string]) => TemplateResult {
		return ([value, label]: [string, string]) => html`
			<option
				value="${value}"
				?selected="${value === selectedValue}"
			>
				${label}
			</option>
		`;
	}

	protected renderSelect(options: Array<[string, string]>, inputHandler: (event: InputEvent) => void, selectedValue: string): TemplateResult {
		return html`
			<select
				part="input"
				@input="${inputHandler}"
			>
				${options.map(this.renderOption(selectedValue))}
			</select>
		`;
	}

	protected renderInstrumentSettings(): TemplateResult {
		return html`
			<ui-toggle>
				<button type="button" class="menu-item">
					🎹
				</button>
				<ui-modal slot="toggled">
					<span slot="title">Instrument</span>
					<div
						part="form"
						slot="body"
					>
						<label part="input-group">
							<span part="input-label">
								Wave
							</span>
							${this.renderSelect((this.constructor as typeof PianoApp).waves, this.setWave, this.wave)}
						</label>
						<label part="input-group">
							<span part="input-label">
								C<sub>0</sub> Frequency
							</span>
							${this.renderSelect((this.constructor as typeof PianoApp).frequencies, this.setFrequency, this.frequencyString)}
						</label>
					</div>
				</ui-modal>
			</ui-toggle>
		`;
	}

	protected renderVolumeSlider(): TemplateResult {
		let icon: string;

		if (this.volume >= 2 / 3) {
			icon = '🔊';
		}
		else if (this.volume > 0) {
			icon = '🔉';
		}
		else {
			icon = '🔈';
		}

		return html`
			<ui-toggle>
				<button type="button" class="menu-item">
					${icon}
				</button>
				<ui-modal slot="toggled">
					<span slot="title">Volume</span>
					<div
						part="form"
						slot="body"
					>
						<input
							part="volume-slider"
							type="range"
							min="0" max="1"
							step="0.1"
							.value="${this.volume}"
							@input="${this.setVolume}"
						/>
					</div>
				</ui-modal>
			</ui-toggle>
		`;
	}

	protected renderSettings() {
		return html`
			<ui-toggle>
				<button type="button" class="menu-item">⚙️</button>
				<ui-modal
					slot="toggled"
					i0="1" b0="1"
					i1="1" b1="0"
				>
					<span slot="title">Settings</span>
					<div
						part="form"
						slot="body"
					>
						<label part="input-group">
							<span part="input-label">
								Key Labels From
							</span>
							${this.renderSelect((this.constructor as typeof PianoApp).keyLabelSources, this.setKeyLabelSource, this.keyLabelSource)}
						</label>
					</div>
				</ui-modal>
			</ui-toggle>
		`;
	}

	protected render(): TemplateResult {
		return html`
			<div class="grid">
				<div class="menu">
					${this.renderInstrumentSettings()}
					${this.renderVolumeSlider()}
					<span aria-hidden="true"></span>
					${this.renderSettings()}
				</div>
				<piano-keyboard
					${ref(this.keyboardRef)}
					.synthesizer="${this.synthesizer}"
					minimum-note-duration="${this.minimumNoteDuration}"
					label-source="${this.keyLabelSource}"
					tabindex="0"
				></piano-keyboard>
			</div>
		`;
	}
}

customElements.define(PianoApp.tagName, PianoApp);

export { PianoApp };
