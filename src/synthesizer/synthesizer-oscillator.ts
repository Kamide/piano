import { SynthesizerEnvelope } from './synthesizer-envelope';
import { SynthesizerNode } from './synthesizer-node';
import { SynthesizerNote } from './synthesizer-note';

export class SynthesizerOscillator extends SynthesizerNode {
	private gainEnvelope: SynthesizerEnvelope;
	private oscillator: OscillatorNode;
	private _wave!: OscillatorType | PeriodicWave;
	private _note!: SynthesizerNote;
	public startTime: number;
	public stopTime: number;

	public constructor(
		context: AudioContext,
		destinationNode: AudioNode,
		gainEnvelope: SynthesizerEnvelope,
		wave: OscillatorType | PeriodicWave,
		note: SynthesizerNote,
	) {
		super(context);
		this.gainEnvelope = gainEnvelope;
		this.oscillator = new OscillatorNode(context);
		this.wave = wave;
		this.note = note;
		this.startTime = -1;
		this.stopTime = -1;
		this.gainNode.connect(destinationNode);
		this.oscillator.connect(this.gainNode);
	}

	public set wave(value: OscillatorType | PeriodicWave) {
		this._wave = value;

		if (this._wave instanceof PeriodicWave) {
			this.oscillator.setPeriodicWave(this._wave);
		}
		else {
			this.oscillator.type = this._wave;
		}
	}

	public get wave(): OscillatorType | PeriodicWave {
		return this._wave;
	}

	public get note(): SynthesizerNote {
		return this._note;
	}

	public set note(value: SynthesizerNote) {
		this._note = value;
		this.oscillator.frequency.setValueAtTime(this._note.frequency, this.currentTime);
	}

	public get started() {
		return this.startTime >= 0;
	}

	public get stopped() {
		return this.stopTime >= 0;
	}

	public get duration(): number {
		if (this.started) {
			const stopTime: number = this.stopped ? this.stopTime : this.currentTime;
			return stopTime - this.startTime;
		}
		else {
			return -1;
		}
	}

	public start(startTime: number) {
		this.startTime = startTime;
		this.gainEnvelope.gate(this.gainNode.gain, this.startTime);
		this.oscillator.start(this.startTime);
	}

	public stop(stopTime: number): void {
		this.stopTime = stopTime;
		this.gainEnvelope.ungate(this.gainNode.gain, this.stopTime);
		this.oscillator.stop(Math.ceil(this.stopTime + this.gainEnvelope.releaseTime) + 1);
	}

	public onStop(handler: EventListener) {
		this.oscillator.addEventListener('ended', handler);
	}
}
