
import { HttpException } from './HttpException'

class InternalServerException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(500, message === undefined ? 'The server has encountered a situation it does not know how to handle.' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500'
  }
}

export default InternalServerException

