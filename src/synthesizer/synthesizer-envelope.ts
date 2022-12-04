/**
 *     Delay Attack Decay Sustain Release
 *   ^      .      .     .       .
 * A |      .      .     .       .
 * m |      .      .     .       .
 * p |      .      .     .       .
 * l |      .     / \_   .       .
 * i |      .    /    \_ .       .
 * t |      .   /       \._______.
 * u |      .  /                  \__
 * d |      . /                      \__
 * e | _____./                          \
 *   +------------------------------------>
 *     Time
 */
export class SynthesizerEnvelope {
	public delayTime: number; // [0, ∞)
	public minimumAmplitude: number; // [0, 1]
	public attackTime: number; // [0, ∞)
	public maximumAmplitude: number; // [0, 1]
	public decayTime: number; // [0, ∞)
	public sustainAmplitude: number; // [0, 1]
	public releaseTime: number; // [0, ∞)

	public constructor(
		delayTime = 0,
		minimumAmplitude = 0,
		attackTime = 0,
		maximumAmplitude = 1,
		decayTime = 0,
		sustainAmplitude = 1,
		releaseTime = 0,
	) {
		this.delayTime = delayTime;
		this.minimumAmplitude = minimumAmplitude;
		this.attackTime = attackTime;
		this.maximumAmplitude = maximumAmplitude;
		this.decayTime = decayTime;
		this.sustainAmplitude = sustainAmplitude;
		this.releaseTime = releaseTime;
	}

	public delay(audioParam: AudioParam, time: number, amplitude = 1): void {
		audioParam.cancelScheduledValues(time);
		audioParam.setValueAtTime(this.minimumAmplitude * amplitude, time);
	}

	public attack(audioParam: AudioParam, time: number, amplitude = 1): void {
		audioParam.cancelScheduledValues(time);
		audioParam.setTargetAtTime(this.maximumAmplitude * amplitude, time, this.attackTime);
	}

	public decay(audioParam: AudioParam, time: number, amplitude = 1): void {
		audioParam.cancelScheduledValues(time);
		audioParam.setTargetAtTime(this.sustainAmplitude * amplitude, time, this.decayTime);
	}

	public release(audioParam: AudioParam, time: number, amplitude = 1): void {
		audioParam.cancelScheduledValues(time);
		audioParam.setTargetAtTime(this.minimumAmplitude * amplitude, time, this.releaseTime);
	}

	public gate(audioParam: AudioParam, time: number, amplitude = 1): void {
		this.delay(audioParam, time, amplitude);
		time += this.delayTime;
		this.attack(audioParam, time, amplitude);
		time += this.attackTime;
		this.decay(audioParam, time, amplitude);
	}

	public ungate(audioParam: AudioParam, time: number, amplitude = 1): void {
		this.release(audioParam, time, amplitude);
	}
}
