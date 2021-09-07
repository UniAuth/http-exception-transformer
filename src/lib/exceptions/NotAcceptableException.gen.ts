
import { HttpException } from './HttpException'

class NotAcceptableException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(406, message === undefined ? 'This response is sent when the web server, after performing server-driven content negotiation, did not find any content that conforms to the criteria given by the user agent.' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406'
  }
}

export default NotAcceptableException

