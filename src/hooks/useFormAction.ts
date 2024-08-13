import { useState } from 'react';

const useFormAction = <T>(action: (data: T) => Promise<any>) => {
  const [response, setResponse] = useState<any>(null);

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