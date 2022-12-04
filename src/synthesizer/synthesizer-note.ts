export class SynthesizerNote {
	public static readonly naturals: Array<number> = [0, 2, 4, 5, 7, 9, 11];
	public static readonly accidentals: Array<number> = [1, 3, 6, 8, 10];

	public static readonly names: Array<Array<string>> = [
		['C'],
		['C♯', 'D♭'],
		['D'],
		['D♯', 'E♭'],
		['E'],
		['F'],
		['F♯', 'G♭'],
		['G'],
		['G♯', 'A♭'],
		['A'],
		['A♯', 'B♭'],
		['B'],
	];

	public static isNatural(noteNumber: number) {
		return this.naturals.includes(mod(noteNumber, 12));
	}

	public static isAccidental(noteNumber: number) {
		return this.accidentals.includes(mod(noteNumber, 12));
	}

	public static namesOf(noteNumber: number): Array<string> {
		return this.names[mod(noteNumber, 12)];
	}

	public static frequencyOf(noteZeroFrequency: number, noteNumber: number): number {
		return noteZeroFrequency * Math.pow(2, noteNumber / 12);
	}

	public noteZeroFrequency: number;
	public noteNumber: number;

	public constructor(noteZeroFrequency: number, noteNumber = 0) {
		this.noteZeroFrequency = noteZeroFrequency;
		this.noteNumber = noteNumber;
	}

	public get frequency(): number {
		return (this.constructor as typeof SynthesizerNote).frequencyOf(this.noteZeroFrequency, this.noteNumber);
	}

	public get names(): Array<string> {
		return (this.constructor as typeof SynthesizerNote).namesOf(this.noteNumber);
	}

	public plus(noteNumber: number): SynthesizerNote {
		return new (this.constructor as typeof SynthesizerNote)(this.noteZeroFrequency, noteNumber);
	}
}

export function mod(a: number, b: number): number {
	return ((a % b) + b) % b;
}
