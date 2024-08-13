import { useState } from 'react';

/**
 * A hook for executing an asynchronous action and storing the result.
 * 
 * @template T - The type of data passed to the action.
 * @param {(data: T) => Promise<any>} action - A function that takes data of type `T` and returns a Promise.
 * @returns {[any, (data: T) => Promise<any>]} - An array with the result and a function to execute the action.
 */
const useFormAction = <T>(action: (data: T) => Promise<any>) => {
  const [response, setResponse] = useState<any>(null);

  /**
   * Executes the action and stores the result or error.
   * 
   * @param {T} data - Data for the action.
   * @returns {Promise<any>} - The result of the action.
   */
  const execute = async (data: T) => {
    try {
      const result = await action(data);
      setResponse(result);
      return result;
    } catch (error) {
      setResponse(error);
      throw error;
    }
  };

  return [response, execute] as const;
}

export { useFormAction };