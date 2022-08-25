import React from "react"
import { TouchableOpacityProps } from "react-native"
import * as S from "./styles"

const icons = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
}

interface Props extends TouchableOpacityProps {
    title: string
    type: "up" | "down"
    isActive: boolean
}

export const TransactionTypeButton = ({
    title,
    type,
    isActive,
    ...rest
}: Props) => {
    return (
        <S.Container {...rest} isActive={isActive} type={type}>
            <S.Icon name={icons[type]} type={type} />

            <S.Title>{title}</S.Title>
        </S.Container>
    )
}
