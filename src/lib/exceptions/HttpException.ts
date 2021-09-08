import { ResponseFormat } from '../interfaces/response.interface'

class HttpException extends Error {
  message: string

  payload: any

  code: number

  reference: string

  userCallback: () => void

  constructor(code: number, message: string, payload?: any, callback: () => void = () => null) {
    super(message)
    this.name = 'GenericHttpException'
    this.message = message
    this.code = code
    this.payload = payload
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
    this.userCallback = callback

    this.userCallback()

    Object.setPrototypeOf(this, HttpException.prototype)
  }

  transformResponse(): ResponseFormat {
    return {
      code: this.code,
      error: true,
      message: this.message,
      payload: this.payload,
    }
  }
}

export { HttpException }
