import { IBaseErrorResource } from './IBaseErrorResource';

class BaseErrorResource extends Error {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private errorResource: IBaseErrorResource,
    message?: string,
  ) {
    // PASS REMAINING ARGUMENTS TO PARENT CONSTRUCTOR
    super(message);
    // MAINTAINS PROPER STACK TRACE FOR WHERE OUR ERROR WAS THROWN (ONLY AVAILABLE ON V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseErrorResource);
    }

    this.name = 'BaseErrorResource';
  }

  public getCause(): IBaseErrorResource {
    return this.errorResource;
  }
}

export default BaseErrorResource;
