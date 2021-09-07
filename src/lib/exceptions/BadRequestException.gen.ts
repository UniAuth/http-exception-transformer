
import { HttpException } from './HttpException'

class BadRequestException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(400, message === undefined ? 'The server could not understand the request due to invalid syntax.' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400'
  }
}

export default BadRequestException

