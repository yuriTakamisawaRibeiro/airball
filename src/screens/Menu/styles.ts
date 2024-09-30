import styled, { css } from "styled-components/native";
import AntDesign  from "@expo/vector-icons/AntDesign"


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`


export const CloseIcon = styled(AntDesign).attrs(({theme}) => ({
    size: 30,
    color: theme.COLORS.GRAY_100,
}))`


`

