import axios from 'axios';
import { useState } from 'react';

interface IRequestTypes {
  url: string;
  method: string;
  body: any;
  onSuccess: any;
}

export default ({ url, method, body, onSuccess }: IRequestTypes) => {
  const [errors, setErrors] = useState<any>(null);

  const doRequest = async (props: any = {}) => {
    try {
      setErrors(null);
      // @ts-ignore
      const response = await axios[method](url, { ...body, ...props });

      // after a successful response
      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div>
          <h4>Ooops.....</h4>
          <ul>
            {err.response?.data.errors.map((err: any) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
