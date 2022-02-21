class SynthesizerNode {
	protected context: AudioContext;
	protected gainNode: GainNode;

	public constructor(context: AudioContext) {
		this.context = context;
		this.gainNode = new GainNode(context);
	}

	public get currentTime(): number {
		return this.context.currentTime;
	}

	public get volume(): number {
		return this.gainNode.gain.value;
	}

	public set volume(value: number) {
		this.gainNode.gain.setValueAtTime(value, this.currentTime);
	}
}

export { SynthesizerNode };
