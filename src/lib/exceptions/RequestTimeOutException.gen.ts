
import { HttpException } from './HttpException'

class RequestTimeOutException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(408, message === undefined ? 'This response is sent on an idle connection by some servers, even without any previous request by the client.' : message, payload)
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408'
  }
}

export default RequestTimeOutException

