import { useEffect } from "react";

const getData = axios.get("https://jsonplaceholder.org/users");

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};
