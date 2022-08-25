import React from "react"
import { Control, Controller } from "react-hook-form"
import { TextInputProps } from "react-native"
import { Input } from "../Input"
import * as S from "./styles"

interface Props extends TextInputProps {
    control: Control
    name: string
}

export const InputForm = ({ name, control, ...set }: Props) => {
    return (
        <S.Conatiner>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Input onChangeText={onChange} value={value} {...set} />
                )}
            ></Controller>
        </S.Conatiner>
    )
}
