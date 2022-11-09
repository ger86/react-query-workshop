import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import useApiClient from 'hooks/useApiClient';
import BooksView from './BooksView';

export default function Books() {
  const apiClient = useApiClient();
  const [page, setPage] = useState(1);

  const query = useQuery({
    queryKey: ['/books', page],
    queryFn: async function fetchBooks({queryKey}) {
      const response = await apiClient({
        path: queryKey[0],
        queryParams: new URLSearchParams({page: queryKey[1]})
      });
      return response.json();
    },
    keepPreviousData: true,
    staleTime: 10000,
    cacheTime: 50000
  });

  function goToNextPage() {
    setPage((p) => p + 1);
  }

  function goToPreviousPage() {
    setPage((p) => p - 1);
  }

  if (query.isLoading) {
    return <div>Cargando...</div>;
  }

  if (query.isError) {
    return <div>Error</div>;
  }

  return (
    <BooksView
      books={query.data.data}
      isFetching={query.isFetching}
      isPreviousData={query.isPreviousData}
      page={page}
      onNextPage={goToNextPage}
      onPreviousPage={goToPreviousPage}
      totalPages={Math.ceil(query.data.total / query.data.itemsPerPage)}
    />
  );
}
