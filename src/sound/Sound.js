

export class Sound {
    /**
     * 
     * @param {String} src 
     */
    constructor (src) {
        this.audios = [

        ]

        this._audioCount = 60

        let argIndex = 0

        for (let i = 0; i < this._audioCount; i++) {
            this.audios.push(new Audio(arguments[argIndex]))
            this.audios[i].volume = 0.1
            argIndex++
            if (argIndex === arguments.length) {
                argIndex = 0
            }
        }

        this.src = src

        this._playableAudioIndex = 0
        
        this._delay = 100

        this._canBePlayed = true
        this._canBePlayedInterval = setInterval(() => {
            this._canBePlayed = true
        }, this._delay)
    }

    set delay (value) {
        this._delay = value
        clearInterval(this._canBePlayedInterval)
        this._canBePlayedInterval = setInterval(() => {
            this._canBePlayed = true
        }, this._delay)
    }

    get delay () {
        return this._delay
    }

    play () {
        if (this._canBePlayed) {
            this.audios[this._playableAudioIndex].play()
            this._playableAudioIndex++
            if (this._playableAudioIndex == this._audioCount) {
                this._playableAudioIndex = 0
            }
            this._canBePlayed = false
        }
    }

    playLoop () {
        this._loopInterval = setInterval(() => {
            this.play()
        }, this._delay)
    }

    playLoopRandom () {
        this._loopInterval = setInterval(() => {
            if (this._canBePlayed) {
                this.audios[this._playableAudioIndex].play()
                this._playableAudioIndex = Math.floor(Math.random() * this._audioCount)
                if (this._playableAudioIndex == this._audioCount) {
                    this._playableAudioIndex = 0
                }
                this._canBePlayed = false
            }
        }, this._delay)
    }

    stop () {
        clearInterval(this._loopInterval)
    }
}