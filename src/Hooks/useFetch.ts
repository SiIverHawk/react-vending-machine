import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface IRequestProps {
  url: string;
}

interface IResponseProps {
  response: Product[];
  error: string;
  loading: boolean;
  setReloading: (reloading: boolean) => void;
}

const useFetch = ({ url }: IRequestProps): IResponseProps => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      let res = await axios.get(url);
      setResponse(res.data.data);
    } catch (e: any) {
      setError(e.message as string);
      setResponse([]);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (reloading) {
      fetchData();
      setReloading(false);
    } else {
      setError("");
    }
  }, [reloading, fetchData]);

  return { response, error, loading, setReloading };
};

export default useFetch;
