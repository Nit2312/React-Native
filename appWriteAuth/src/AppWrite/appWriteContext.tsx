import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'
import AppWrite from './service'
import { create } from 'react-test-renderer';

type appContextType = {
  appwrite: AppWrite;
  isloggedIn: Boolean;
  SetIsloggedIn: (isloggedIn: Boolean) => void
}

export const appWriteContext = createContext<appContextType>({
  appwrite: new AppWrite(),
  isloggedIn: false,
  SetIsloggedIn: () => { }
})

export const appWriteprovider: FC<PropsWithChildren> = ({ children }) => {

  const [isloggedIn, SetIsloggedIn] = useState(false)
  const defaultValue = {
    appwrite: new AppWrite(),
    isloggedIn,
    SetIsloggedIn: () => { },
  }
  return (
    <appWriteContext.Provider value={defaultValue}>
      {children}
    </appWriteContext.Provider>
  )
}

export default appWriteContext