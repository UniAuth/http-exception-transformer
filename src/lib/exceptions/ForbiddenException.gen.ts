
import { HttpException } from './HttpException'

class ForbiddenException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(403, message === undefined ? 'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403'
  }
}

export default ForbiddenException

