import { createContext } from 'react';

export const selectContext = createContext({
  value: '',
  isOpen: false,
  onChange: (key: any) => {},
  toggleOpen: () => {},
});

export const SelectProvider = selectContext.Provider;
