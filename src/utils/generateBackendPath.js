const API_URL = 'https://librarify.latteandfront.es/api';

export default function generateBackendPath(path, searchParams = null) {
  let query = '';
  if (searchParams) {
    query = `?${searchParams.toString()}`;
  }
  return `${API_URL}${path}${query}`;
}
