import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { appWriteContext } from '../AppWrite/appWriteContext'
import Loading from '../Components/Loading'

//Routes
import AuthStack from './AuthStack'
import AppStack from './AppStack'

export const Router = () => {
    const [isloading, SetIsloading] = useState<boolean>(true)
    const { appwrite, isloggedIn, SetIsloggedIn } = useContext(appWriteContext)

    useEffect(() => {
        appwrite
            .getCurrentUser()
            .then(Response => {
                SetIsloggedIn(false)
                if (Response) {
                    SetIsloggedIn(true)
                }
            })
            .catch(_ => {
                SetIsloading(false)
                SetIsloggedIn(false)
            })
    }, [appwrite, SetIsloggedIn])

    if (isloading) {
        return <Loading />
    }

    return (
        <NavigationContainer>
            {isloggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
