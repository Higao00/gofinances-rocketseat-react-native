import React from "react"
import HighlightCard from "../../components/HighlightCard"
import TransactionsCard from "../../components/TransactionsCard"
import * as S from "./styles"

const Dashboard = () => {
    return (
        <S.Conatiner>
            <S.Header>
                <S.UserWrapper>
                    <S.UserInfo>
                        <S.Photo
                            source={{
                                uri: "https://avatars.githubusercontent.com/u/54690671?v=4",
                            }}
                        />

                        <S.User>
                            <S.UserGreeting>Olá</S.UserGreeting>
                            <S.UserName>Higor</S.UserName>
                        </S.User>
                    </S.UserInfo>
                    <S.IconPower name="power" />
                </S.UserWrapper>
            </S.Header>

            <S.HighlightCards>
                <HighlightCard
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                    type="up"
                />

                <HighlightCard
                    title="Saidas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última entrada dia 20 de abril"
                    type="down"
                />

                <HighlightCard
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="1 à 16 de abril"
                    type="total"
                />
            </S.HighlightCards>

            <S.Transactions>
                <S.Title>Listagem</S.Title>

                <TransactionsCard />
            </S.Transactions>
        </S.Conatiner>
    )
}

export default Dashboard
