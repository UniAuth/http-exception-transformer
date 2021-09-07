
import { HttpException } from './HttpException'

class NotFoundException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(404, message === undefined ? 'The server can not find the requested resource' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'
  }
}

export default NotFoundException

