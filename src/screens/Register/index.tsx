import React, { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { Modal } from "react-native"
import { Button } from "../../components/Form/Button"
import { CategorySelectButtons } from "../../components/Form/CategorySelectButtons"
import { InputForm } from "../../components/Form/InputForm"
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton"
import CategorySelect from "../CategorySelect"
import * as S from "./styles"

interface FormData {
    name: string
    amount: string
}

const Register = () => {
    const [transactionType, setTransactionType] = useState("")
    const [categoryModal, setCategoryModal] = useState(false)
    const [category, setCategory] = useState({
        key: "category",
        name: "Categoria",
    })

    const { control, handleSubmit } = useForm()

    const handleCloseSelectCategoryModal = () => {
        setCategoryModal(false)
    }

    const handleOpenSelectCategoryModal = () => {
        setCategoryModal(true)
    }

    const handleTransactionTypeSelect = (type: "up" | "down") => {
        setTransactionType(type)
    }

    const handleRegister = (form: FieldValues) => {
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.name,
        }

        console.log(data)
    }

    return (
        <S.Container>
            <S.Header>
                <S.Title>Cadastro</S.Title>
            </S.Header>

            <S.Form>
                <S.Fields>
                    <InputForm
                        name="name"
                        control={control}
                        placeholder="Nome"
                    />
                    <InputForm
                        name="amount"
                        control={control}
                        placeholder="Preço"
                    />

                    <S.TransactionsTypes>
                        <TransactionTypeButton
                            title="Income"
                            type="up"
                            onPress={() => handleTransactionTypeSelect("up")}
                            isActive={transactionType === "up"}
                        />
                        <TransactionTypeButton
                            title="Outcome"
                            type="down"
                            onPress={() => handleTransactionTypeSelect("down")}
                            isActive={transactionType === "down"}
                        />
                    </S.TransactionsTypes>

                    <CategorySelectButtons
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </S.Fields>

                <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
            </S.Form>

            <Modal visible={categoryModal}>
                <CategorySelect
                    category={category}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                    setCategory={setCategory}
                />
            </Modal>
        </S.Container>
    )
}

export default Register
