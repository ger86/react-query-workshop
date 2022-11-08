import {useQuery} from '@tanstack/react-query';
import useApiClient from 'hooks/useApiClient';
import BooksView from './BooksView';

export default function Books() {
  const apiClient = useApiClient();

  const query = useQuery({
    queryKey: ['/books'],
    queryFn: async function fetchBooks({queryKey}) {
      const response = await apiClient(queryKey[0]);
      return response.json();
    }
  });

  if (query.isLoading) {
    return <div>Cargando...</div>;
  }

  if (query.isError) {
    return <div>Error</div>;
  }

  return <BooksView books={query.data.data} />;
}
