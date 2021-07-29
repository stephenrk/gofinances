import React from 'react'

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './styles'

interface Category {
    name: string
    icon: string
}

export interface TransactionCardProps {
    type: 'credit' | 'debit'
    title: string
    amount: string
    category: Category
    date: string
}

interface Props {
    data: TransactionCardProps
}

export const TransactionCard = ({ data }: Props) => {
    return (
        <Container>
            <Title>{data.title}</Title>
            {/* Definindo prop com o nome 'type' */}
            <Amount type={data.type}>{`${data.type === 'debit' ? '- ' : ''}${data.amount}`}</Amount> 
            <Footer>
                <Category>
                    <Icon name={data.category.icon} />
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}
