import React, { useState, useEffect } from "react";

// custom hook , we can use it anywhere by calling  useFetch and providing url and options i.e the method (get,post,etc)
const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [loading, data, error, options, url]);
  return { data, loading, error };
};

export default useFetch;
