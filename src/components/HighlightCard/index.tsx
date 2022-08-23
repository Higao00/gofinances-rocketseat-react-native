import React from "react"
import * as S from "./styles"

interface Props {
    title: string
    amount: string
    lastTransaction: string
    type: "up" | "down" | "total"
}

const HighlightCard = ({ title, amount, lastTransaction, type }: Props) => {
    const icon = {
        up: "arrow-up-circle",
        down: "arrow-down-circle",
        total: "dollar-sign",
    }

    return (
        <>
            <S.Container type={type}>
                <S.Header>
                    <S.Title type={type}>{title}</S.Title>
                    <S.Icon type={type} name={icon[type]} />
                </S.Header>

                <S.Footer>
                    <S.Amount type={type}>{amount}</S.Amount>
                    <S.LastTransactions type={type}>
                        {lastTransaction}
                    </S.LastTransactions>
                </S.Footer>
            </S.Container>
        </>
    )
}

export default HighlightCard
