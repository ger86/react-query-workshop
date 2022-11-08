import {useCallback} from 'react';
import {useAuthContext} from 'contexts/authContext';
import generateBackendPath from 'utils/generateBackendPath';

export default function useApiClient() {
  const {authTokens} = useAuthContext();

  return useCallback(
    async function ({path, method = 'GET', body = null, queryParams = null}) {
      return fetch(generateBackendPath(path, queryParams), {
        method,
        body,
        headers: {
          'Content-Type': 'application/json',
          ...(authTokens.token ? {Authorization: `Bearer ${authTokens.token}`} : {})
        }
      });
    },
    [authTokens.token]
  );
}
