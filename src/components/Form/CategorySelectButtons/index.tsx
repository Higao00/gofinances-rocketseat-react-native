import React from "react"
import * as S from "./styles"

interface Props {
    title: string
    onPress: () => void
}

export const CategorySelectButtons = ({ title, onPress }: Props) => {
    return (
        <S.Container onPress={onPress}>
            <S.Category>{title}</S.Category>
            <S.Icon name="chevron-down"></S.Icon>
        </S.Container>
    )
}
