import {useQuery} from '@tanstack/react-query';
import useApiClient from 'hooks/useApiClient';
import generateBackendPath from 'utils/generateBackendPath';
import BooksView from './BooksView';

export default function Books() {
  const path = generateBackendPath('/books');
  const apiClient = useApiClient();

  const query = useQuery({
    queryKey: [path],
    queryFn: async function fetchBooks() {
      const response = await apiClient('/books');
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
