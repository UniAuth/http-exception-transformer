import { HttpException } from './HttpException'

class UnAuthorizedException extends HttpException {
  constructor(message?: string, payload?: any, callback: () => void = () => null) {
    super(
      401,
      message === undefined
        ? 'The client must authenticate itself to get the requested response.'
        : message,
      payload,
      callback,
    )
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401'
  }
}

export default UnAuthorizedException
