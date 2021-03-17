/**
 * @todo : implement all 4XX and 5XX codes from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

import { SourceRow } from './interfaces/source.interface'

export const exceptionList: Array<SourceRow> = [
  {
    code: 400,
    name: 'BadRequestException',
    message: 'The server could not understand the request due to invalid syntax.',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400',
  },
  {
    code: 401,
    name: 'UnAuthorizedException',
    message: 'The client must authenticate itself to get the requested response.',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401',
  },
  {
    code:403,
    name:"Unauthorised",
    message:"Client must authenticate itself to get authenticate itself",
    reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",
  },
  {
    code: 404,
    name: 'NotFoundException',
    message: 'The server can not find the requested resource',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404',
  },
  {
    code: 500,
    name: 'InternalServerException',
    message: 'The server has encountered a situation it does not know how to handle.',
    reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500',
  },



]
