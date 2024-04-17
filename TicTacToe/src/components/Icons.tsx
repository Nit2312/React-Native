import React from 'react'
import { PropsWithChildren } from 'react'
import { Switch } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string;
}>
const Icons = ({ name } : IconsProps) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#45CE30"></Icon>
            break;
        case 'cross':
            return <Icon name="times" size={38} color="#4BCFFA"></Icon>
            break;
        default:
            return <Icon name="pencil" size={38} color="#777E8B"></Icon>
    }
}

export default Icons