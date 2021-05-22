/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response, NextFunction, Errback } from 'express'
import { HttpException } from './exceptions/HttpException'
import { MongoException } from './exceptions/MongoException'

const HttpExceptionTransformer = (err: Errback, req: Request, res: Response, nxt: NextFunction) => {
  if (err instanceof HttpException || err instanceof MongoException) {
    const transformedResponse = err.transformResponse()
    return res.status(transformedResponse.code).json(transformedResponse)
  }

  return nxt(err)
}

export { HttpExceptionTransformer }
