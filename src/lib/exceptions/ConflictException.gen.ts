
import { HttpException } from './HttpException'

class ConflictException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(409, message === undefined ? 'This response is sent when a request conflicts with the current state of the server.' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409'
  }
}

export default ConflictException

