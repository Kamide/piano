import { SynthesizerEnvelope } from './synthesizer-envelope';
import { SynthesizerNode } from './synthesizer-node';
import { SynthesizerNote } from './synthesizer-note';
import { SynthesizerOscillator } from './synthesizer-oscillator';

class Synthesizer extends SynthesizerNode {
	private compressor: DynamicsCompressorNode;
	private gainEnvelope: SynthesizerEnvelope;
	public wave: OscillatorType | PeriodicWave;
	public noteZero: SynthesizerNote;
	private oscillators: Array<SynthesizerOscillator>;

	public constructor(
		gainEnvelope: SynthesizerEnvelope,
		wave: OscillatorType | PeriodicWave,
		noteZeroFrequency: number
	) {
		super(new AudioContext());
		this.compressor = new DynamicsCompressorNode(this.context);
		this.gainEnvelope = gainEnvelope;
		this.wave = wave;
		this.noteZero = new SynthesizerNote(noteZeroFrequency);
		this.oscillators = [];
		this.compressor.connect(this.context.destination);
		this.gainNode.connect(this.compressor);
	}

	public startOscillator(noteNumber: number, startTime: number | undefined = undefined): SynthesizerOscillator {
		startTime ||= this.currentTime;
		const oscillator = new SynthesizerOscillator(
			this.context,
			this.gainNode,
			this.gainEnvelope,
			this.wave,
			this.noteZero.plus(noteNumber),
		);
		this.oscillators.push(oscillator);
		oscillator.start(startTime);
		return oscillator;
	}

	public get noteZeroFrequency(): number {
		return this.noteZero.noteZeroFrequency;
	}

	public set noteZeroFrequency(value: number) {
		this.noteZero.noteZeroFrequency = value;
	}

	public stopOscillator(oscillator: SynthesizerOscillator, stopTime: number | undefined = undefined): void {
		if (this.oscillators.includes(oscillator)) {
			stopTime ??= this.currentTime;
			oscillator.onStop(() => this.removeOscillator(oscillator));
			oscillator.stop(stopTime);
		}
	}

	private removeOscillator(oscillator: SynthesizerOscillator) {
		const index = this.oscillators.indexOf(oscillator);

		if (index >= 0) {
			this.oscillators.splice(index, 1);
		}
	}
}

export { Synthesizer };
