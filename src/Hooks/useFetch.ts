import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface IRequestProps {
  url: string;
}

interface IResponseProps {
  response: Product[];
  error: string;
  loading: boolean;
}

const useFetch = ({ url }: IRequestProps): IResponseProps => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      let res = await axios.get(url);
      setResponse(res.data.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }

      if (axios.isAxiosError(error)) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, error, loading };
};

export default useFetch;
