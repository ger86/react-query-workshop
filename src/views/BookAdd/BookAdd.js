import {useState} from 'react';
import {useAuthContext} from 'contexts/authContext';
import generateBackendPath from 'utils/generateBackendPath';
import BookAddView from './BookAddView';

export default function BookForm() {
  const [requestStatus, setRequestStatus] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });
  const {authTokens} = useAuthContext();
  const [form, setForm] = useState({
    title: ''
  });

  function handleInputChanged(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setRequestStatus({
        isLoading: true,
        isSuccesss: false,
        isError: false
      });
      const response = await fetch(generateBackendPath('/books'), {
        method: 'POST',
        body: JSON.stringify({
          title: form.title
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authTokens.token}`
        }
      });
      if (response.ok) {
        setRequestStatus({
          isLoading: false,
          isSuccess: true,
          isError: false
        });
      } else {
        setRequestStatus({
          isLoading: false,
          isSuccesss: false,
          isError: true
        });
      }
    } catch (error) {
      setRequestStatus({
        isLoading: false,
        isSuccesss: false,
        isError: true
      });
    }
  }

  return (
    <BookAddView
      form={form}
      onInputChanged={handleInputChanged}
      onSubmit={handleSubmit}
      requestStatus={requestStatus}
    />
  );
}
