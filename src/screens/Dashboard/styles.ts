import styled from 'styled-components/native'

export const View = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroud};
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: 20;
    font-weight: bolder;
`
