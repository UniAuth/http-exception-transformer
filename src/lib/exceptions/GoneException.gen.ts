
import { HttpException } from './HttpException'

class GoneException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(410, message === undefined ? 'This response is sent when the requested content has been permanently deleted from server, with no forwarding address' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410'
  }
}

export default GoneException

