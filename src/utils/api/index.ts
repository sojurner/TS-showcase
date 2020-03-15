import { TFetchRequest, TStatusReducer } from './index.d';

const fetchRequest: TFetchRequest = async (url, options) => {
  try {
    const response: Response = await fetch(url, options);
    return statusReducer(response);
  } catch (error) {
    return { error };
  }
};

const statusReducer: TStatusReducer = async (response: Response) => {
  if (response.ok) {
    return await await response.json();
  } else {
    const error = new Error('Something went Wrong');
    return { error };
  }
};

export { fetchRequest, statusReducer };
