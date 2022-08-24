import React from "react"
import HighlightCard from "../../components/HighlightCard"
import TransactionsCard, {
    TransactionCardProps,
} from "../../components/TransactionsCard"
import * as S from "./styles"

export interface DataListProps extends TransactionCardProps {
    id: string
}

const Dashboard = () => {
    const data: DataListProps[] = [
        {
            id: "0",
            type: "positive",
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            date: "13/04/2020",
            category: { name: "Vendas", icon: "dollar-sign" },
        },

        {
            id: "1",
            type: "negative",
            title: "Hamburgueria Pizzy",
            amount: "R$ 59,00",
            date: "10/04/2020",
            category: { name: "Alimentação", icon: "coffee" },
        },

        {
            id: "2",
            type: "negative",
            title: "Aluguel do apartamento",
            amount: "R$ 1.200,00",
            date: "23/04/2020",
            category: { name: "Vendas", icon: "shopping-bag" },
        },
    ]

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

                <S.TransactionList
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={({ item }) => <TransactionsCard data={item} />}
                />
            </S.Transactions>
        </S.Conatiner>
    )
}

export default Dashboard
