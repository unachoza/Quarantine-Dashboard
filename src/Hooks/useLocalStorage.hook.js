import { useEffect } from 'react';

// /reducer
const useLocalStorage = (key, state) => {
  let value = JSON.parse(window.localStorage.getItem(key));
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  console.log('this is value', value, 'this is staet', state);
  return [value, state];
};

export default useLocalStorage;
