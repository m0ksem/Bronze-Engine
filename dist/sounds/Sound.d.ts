export declare class Sound {
    playing: boolean;
    private audios;
    private _audioCount;
    private _playableAudioIndex;
    private _delay;
    private _canBePlayed;
    private _canBePlayedInterval;
    private _loopInterval;
    private _volume;
    /**
     * Simple sound object.
     * @param  src
     */
    constructor(src: string | Array<string>, audioCount?: number, volume?: number);
    volume: number;
    delay: any;
    play(): void;
    playLoop(): void;
    playLoopRandom(): void;
    stop(): void;
}
export default Sound;
