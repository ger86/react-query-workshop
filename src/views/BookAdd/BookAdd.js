import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {useNavigate} from 'react-router';
import {BOOKS} from 'config/router/paths';
import useApiClient from 'hooks/useApiClient';
import BookAddView from './BookAddView';

export default function BookAdd() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: ''
  });

  const apiClient = useApiClient();
  const mutation = useMutation({
    mutationFn: function () {
      return apiClient({
        path: '/books',
        method: 'POST',
        body: JSON.stringify(form)
      });
    }
  });

  function handleInputChanged(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    mutation.mutate(form, {
      onSuccess: function () {
        navigate(BOOKS);
      }
    });
  }

  return (
    <BookAddView
      form={form}
      isError={mutation.isError}
      isLoading={mutation.isLoading}
      isSuccess={mutation.isSuccess}
      onInputChanged={handleInputChanged}
      onSubmit={handleSubmit}
    />
  );
}
