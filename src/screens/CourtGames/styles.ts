import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';



interface TabButtonProps {
  isActive?: boolean;
}


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const Content = styled.View`
 align-items: center;
 flex:1;
`;

export const CourtHeader = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  position: relative;
  margin-bottom: 0;
`;

export const ImageCourt = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  position: absolute;
  top: 20%;
  margin-left: -50%;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const LocationContainer = styled.View`
  position:absolute;
  flex-direction: row;  
  justify-content: flex-start; 
  margin-top: 10px;
  width: 90%; 
`;

export const Description = styled.Text`
  text-align: left;
  margin-left: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;


export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 30%;
`;

export const IconContainer = styled.View`
  position: absolute;
  bottom: 170px;
  flex-direction:row;
  left: 85%;
  gap:8px;
`;


export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
  align-self: center;
  margin-top: 0;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between; /* Isso ajuda a distribuir os botões uniformemente */
  align-self: center; /* Centraliza o contêiner no meio da tela */
  width: 100%; /* Defina a largura para centralizar e limitar o espaço */
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px; /* Opcional: arredondamento das bordas */
  margin-top:10px;
`;


export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  padding: 8px 20px;
  border-radius: 20px;
  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.COLORS.GRAY_700};
          border: 2px solid ${theme.COLORS.GRAY_100};
        `
      : css`
          background-color: transparent;
          border: none;
        `}
`;

export const TabButtonText = styled.Text<TabButtonProps>`
  color: ${({ isActive, theme }) => (isActive ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_100)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;


