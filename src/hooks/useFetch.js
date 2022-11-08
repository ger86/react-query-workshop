import {useEffect, useState} from 'react';

export default function useFetch(url, jwt) {
  const [requestState, setRequestState] = useState({
    isLoading: true,
    isSuccesss: false,
    isError: false
  });
  const [json, setJson] = useState(null);

  useEffect(
    function () {
      async function fetchBooks() {
        const headers =
          jwt === null
            ? {}
            : {
                Authorization: `Bearer ${jwt}`
              };
        setRequestState({
          isLoading: true,
          isSuccesss: false,
          isError: false
        });
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              ...headers
            }
          });
          const json = await response.json();
          setRequestState({
            isLoading: false,
            isSuccesss: true,
            isError: false
          });
          setJson(json);
        } catch (error) {
          setRequestState({
            isLoading: false,
            isSuccesss: false,
            isError: true
          });
        }
      }
      fetchBooks();
    },
    [jwt, url]
  );

  return [requestState, json];
}
