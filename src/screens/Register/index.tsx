import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../components/Forms/Button'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { InputForm } from '../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelect } from '../CategorySelect'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles'

interface FormData {
    name: string
    amount: string
}

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Nome é obrigatório"),
    amount: Yup.number()
        .typeError("Informe um valor númerico")
        .positive("O valor não pode ser negativo")
        .required("O valor é obrigatório")
})

export const Register = () => {
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalVisible, setCategoryModalVisible] = useState(false)
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    function handleSelectTransactionType(type: 'credit' | 'debit') {
        setTransactionType(type)
    }

    function handleCloseCategorySelect() {
        setCategoryModalVisible(false)
    }

    function handleOpenCategorySelect() {
        setCategoryModalVisible(true)
    }

    function handleRegister(form: FormData) {

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm error={errors.name && errors.name.message} control={control} name="name" placeholder="Nome" autoCapitalize="sentences" autoCorrect={false} />
                        <InputForm error={errors.amount && errors.amount.message} control={control} name="amount" placeholder="Preço" keyboardType="numeric" />

                        <TransactionTypes>
                            <TransactionTypeButton isActive={transactionType === 'credit'} type="credit" title="Income" onPress={() => handleSelectTransactionType('credit')} />
                            <TransactionTypeButton isActive={transactionType === 'debit'} type="debit" title="Income" onPress={() => handleSelectTransactionType('debit')} />
                        </TransactionTypes>

                        <CategorySelectButton title={category.name} onPress={handleOpenCategorySelect} />
                    </Fields>
                    <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
                </Form>

                <Modal visible={categoryModalVisible}>
                    <CategorySelect category={category} setCategory={setCategory} handleCloseCategorySelect={handleCloseCategorySelect} />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}
