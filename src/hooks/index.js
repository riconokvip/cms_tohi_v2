import { useState, useEffect } from 'react';

const usePaginatedData = (fetchFunction, initialPage = 1, initialPageSize = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchFunction(page, pageSize);
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();

  }, [fetchFunction, page, pageSize]);

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const changePageSize = (newPageSize) => {
    setPageSize(newPageSize);
  };

  return {
    data,
    loading,
    error,
    page,
    pageSize,
    nextPage,
    prevPage,
    goToPage,
    changePageSize
  };
};

export default usePaginatedData;