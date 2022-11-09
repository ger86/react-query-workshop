import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import useApiClient from 'hooks/useApiClient';
import BookAddView from './BookAddView';

export default function BookAdd() {
  // const queryClient = useQueryClient();
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
        // queryClient.invalidateQueries('/books');
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
