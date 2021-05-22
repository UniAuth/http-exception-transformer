import { MongoException } from './MongoException'

class DuplicateKeyException extends MongoException {
  constructor(message?: string, payload?: any, callback: () => void = () => null) {
    super(
      409,
      message === undefined
        ? 'E11000.Duplicate key found. Might be a result of unique constraint in the index defined in schema'
        : message,
      payload,
      callback,
    )
    this.reference =
      'https://docs.mongodb.com/manual/core/index-unique/#unique-index-and-missing-field'
  }
}

export default DuplicateKeyException
