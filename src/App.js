import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from 'components/router/PrivateRoute';
import PublicRoute from 'components/router/PublicRoute';
import {
  BOOKS,
  BOOK_ADD,
  BOOK_DELETE,
  BOOK_DETAIL,
  BOOK_EDIT,
  LOGIN,
  LOGOUT
} from 'config/router/paths';
import AuthContextProvider from 'contexts/authContext';
import BookAdd from 'views/BookAdd';
import BookDelete from 'views/BookDelete';
import BookDetail from 'views/BookDetail';
import BookEdit from 'views/BookEdit';
import Books from 'views/Books';
import Login from 'views/Login';
import Logout from 'views/Logout';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<PrivateRoute />}>
              <Route path={BOOK_ADD} element={<BookAdd />} />
              <Route path={BOOK_DELETE} element={<BookDelete />} />
              <Route path={BOOK_DETAIL} element={<BookDetail />} />
              <Route path={BOOK_EDIT} element={<BookEdit />} />
              <Route path={BOOKS} element={<Books />} />
              <Route path={LOGOUT} element={<Logout />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path={LOGIN} element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
