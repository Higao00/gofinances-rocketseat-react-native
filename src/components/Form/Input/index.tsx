import React from "react"
import { TextInputProps } from "react-native"
import * as S from "./styles"

type Props = TextInputProps

export const Input = ({ ...rest }: Props) => {
    return <S.Container {...rest} />
}
