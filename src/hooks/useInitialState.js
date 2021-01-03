import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  const [categories, setCategories] = useState([]);

  // The hook call fetch the API, brings a video and set it.
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setCategories(Object.keys(data));
      });
  }, []);

  return [videos, categories];
};

export default useInitialState;
