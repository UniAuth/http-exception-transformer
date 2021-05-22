import { ResponseFormat } from '../interfaces/response.interface'

class MongoException extends Error {
  message: string

  payload: any

  code: number

  reference: string

  userCallback: () => void

  constructor(code: number, message: string, payload?: any, callback: () => void = () => null) {
    super(message)
    this.name = 'GenericMongoException'
    this.message = message
    this.code = code
    this.payload = payload
    this.reference = 'https://github.com/stbrody/mongo/blob/master/docs/errors.md'
    this.userCallback = callback

    this.userCallback()

    Object.setPrototypeOf(this, MongoException.prototype)
  }

  transformResponse(): ResponseFormat {
    return {
      code: this.code,
      error: true,
      message: this.message,
      payload: this.payload,
      reference: this.reference,
    }
  }
}

export { MongoException }
