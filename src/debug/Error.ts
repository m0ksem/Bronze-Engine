export default class BronzeError {
  constructor(message: string) {
    throw new CustomError(message);
  }  
}

class CustomError {
  name: string = 'BronzeError'
  message: string
  constructor(message: string) {
    Error.apply(this, [message]);
    this.message = message
  }
}

CustomError.prototype = new Error()

class BronzeWarn {
  constructor (message: string) {
    console.warn(message)
  }
}

class BronzeLog {
  constructor (log: any) {
    console.log(log)
  }
}

export {
  BronzeError, BronzeWarn, BronzeLog
}