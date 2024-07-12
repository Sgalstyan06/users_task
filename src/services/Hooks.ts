import { useState } from "react";

type UseGetDataResponse<T> = {
  data: T | null;
  loading: boolean;
  getData: (url: string) => void;
  error: string;
};

export const useGetData = <T>(): UseGetDataResponse<T> => {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  function getData(url: string) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { data, getData, loading, error };
};
