import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    Title,
    Icon
} from './styles'

interface Props extends TouchableOpacityProps {
    title: string
    isActive: boolean
    type: 'credit' | 'debit'
}

const icons = {
    credit: 'arrow-up-circle',
    debit: 'arrow-down-circle'
}

export const TransactionTypeButton = ({ title, type, isActive, ...rest }: Props) => {
    return (
        <Container type={type} isActive={isActive} {...rest}>
            <Icon type={type} name={icons[type]} />
            <Title>{title}</Title>
        </Container>
    )
}
