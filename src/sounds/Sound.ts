export class Sound {
  public playing: boolean;

  private audios: HTMLAudioElement[];
  private _audioCount: number;
  private _playableAudioIndex: number = 0;
  private _delay: number = 100;
  private _canBePlayed: boolean = true;
  private _canBePlayedInterval: number | null;
  private _loopInterval: number = -1;
  private _volume = 0.1

  /**
   * Simple sound object. 
   * @param  src
   */
  constructor(src: string | Array<string>, audioCount = 60, volume = 0.1) {
    this.audios = [];

    this._audioCount = audioCount;

    let sources: string[]

    if (!(src instanceof Array)) {
      sources = []
      for (let i = 0; i < audioCount; i++) {
        sources.push(src)        
      }
    } else if (src instanceof Array) {
      sources = src
    } else {
      return
    }

    let argIndex = 0;
    for (let i = 0; i < this._audioCount; i++) {
      this.audios.push(new Audio(sources[argIndex]));
      this.audios[i].volume = volume;
      argIndex++;
      if (argIndex === src.length) {
        argIndex = 0;
      }
    }
    this._canBePlayed = true;
    this._canBePlayedInterval = Number(setInterval(() => {
      this._canBePlayed = true;
    }, this._delay));

    this.playing = false;
  }

  
  public set volume(v : number) {
    for (let i = 0; i < this._audioCount; i++) {
      this.audios[i].volume = v;
    }
  }
  
  
  public get volume(): number {
    return  this._volume
  }
  

  set delay(value) {
    this._delay = value;
    clearInterval(this._canBePlayedInterval!);
    this._canBePlayedInterval = Number(setInterval(() => {
      this._canBePlayed = true;
    }, this._delay));
  }

  get delay() {
    return this._delay;
  }

  play() {
    if (this._canBePlayed) {
      this.audios[this._playableAudioIndex].play();
      this._playableAudioIndex++;
      if (this._playableAudioIndex == this._audioCount) {
        this._playableAudioIndex = 0;
      }
      this._canBePlayed = false;
    }
  }

  playLoop() {
    clearInterval(this._loopInterval!);
    this._loopInterval = Number(setInterval(() => {
      this.play();
    }, this._delay));
    this.playing = true;
  }

  playLoopRandom() {
    clearInterval(this._loopInterval);
    this._loopInterval = Number(setInterval(() => {
      if (this._canBePlayed) {
        this.audios[this._playableAudioIndex].play();
        this._playableAudioIndex = Math.floor(Math.random() * this._audioCount);
        if (this._playableAudioIndex == this._audioCount) {
          this._playableAudioIndex = 0;
        }
        this._canBePlayed = false;
      }
    }, this._delay));
    this.playing = true;
  }

  stop() {
    clearInterval(this._loopInterval);
    this._canBePlayed = false;
    this.playing = false;
    for (let i = 0; i < this.audios.length; i++) {
      const audio = this.audios[i]
      if (audio.stop) {
        audio.stop()
      }
    }
  }
}
