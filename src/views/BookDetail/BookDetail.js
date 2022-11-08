import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router';
import useApiClient from 'hooks/useApiClient';
import BookDetailView from './BookDetailView';

export default function BookDetail() {
  const routeParams = useParams();
  const apiClient = useApiClient();

  const query = useQuery({
    queryKey: ['book', routeParams.id],
    queryFn: async function fetchBooks({queryKey}) {
      const response = await apiClient({
        path: `/books/${routeParams.id}`
      });
      return response.json();
    }
  });

  if (query.isLoading) {
    return <div>Cargando...</div>;
  }

  if (query.isError) {
    return <div>Error</div>;
  }

  return <BookDetailView book={query.data} />;
}
