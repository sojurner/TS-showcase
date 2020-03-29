import { TFetchRequest, TStatusReducer } from './index.d';

const [
  GeneralError,
  RangeError,
  EvalError,
  InternalError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
] = [
  'GeneralError',
  'RangeError',
  'EvalError',
  'InternalError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError'
];

const fetchRequest: TFetchRequest = async (url, options) => {
  try {
    const response: Response = await fetch(url, options);
    return statusReducer(response);
  } catch (e) {
    switch (e.constructor.name) {
      case RangeError:
        return createError(RangeError);
      case InternalError:
        return createError(InternalError);
      case EvalError:
        return createError(EvalError);
      case ReferenceError:
        return createError(ReferenceError);
      case SyntaxError:
        return createError(SyntaxError);
      case TypeError:
        return createError(TypeError);
      case URIError:
        return createError(URIError);
      default:
        return createError(GeneralError);
    }
  }
};

const statusReducer: TStatusReducer = async (response: Response) => {
  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Something went Wrong');
  }
};

const createError = (msg: string) =>
  new Error(`Something went wrong \n exception: ${msg}`);

export { fetchRequest, statusReducer };
