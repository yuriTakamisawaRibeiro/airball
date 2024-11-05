import { useState } from "react";
import { ScrollView } from "react-native";
import { 
  Container,
  CourtHeader,
  ImageCourt,
  Title,
  Line,
  Content,
  IconContainer,
  TabContainer,
  TabButton,
  TabButtonText,
  MatchName,
  ProfileRow,
  ProfilePic,
  UserIcon,
  GhostText,
  FormRow,
  Label,
  InputContainer,
  InputLine,
  GameDetails,
  DetailRow,
  DetailIcon,
  DetailText 
} from "./styles";
import { Header } from "@components/Header";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import CourtIllustration from "@assets/Court.png";

export default function MatchDetails() {
  const [selectedTab, setSelectedTab] = useState("Jogo");

  // Dados preenchidos
  const frequencia = "Semanal";
  const data = new Date().toLocaleDateString();
  const horario = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const quadra = "Quadra Inteira";
  const nivel = "Amador";

  const renderContent = () => {
    switch (selectedTab) {
      case "Jogo":
        return (
          <ScrollView>
            <Container>
              <Content>
                <FormRow>
                  <InputLine />
                  <InputContainer>
                    <Label>Frequência</Label>
                    <DetailIcon name="sync" size={24} color="white" />
                    <DetailText>{frequencia}</DetailText>
                  </InputContainer>
                  <InputLine />
                </FormRow>
                <FormRow>
                  <InputContainer>
                    <Label>Data</Label>
                    <DetailIcon name="calendar-alt" size={24} color="white" />
                    <DetailText>{data}</DetailText>
                  </InputContainer>
                  <InputLine />
                </FormRow>
                <FormRow>
                  <InputContainer>
                    <Label>Horário</Label>
                    <DetailIcon name="clock" size={24} color="white" />
                    <DetailText>{horario}</DetailText>
                  </InputContainer>
                  <InputLine />
                </FormRow>
                <FormRow>
                  <InputContainer>
                    <Label>Quadra</Label>
                    <DetailIcon name="basketball-ball" size={24} color="white" />
                    <DetailText>{quadra}</DetailText>
                  </InputContainer>
                  <InputLine />
                </FormRow>
                <FormRow>
                  <InputContainer>
                    <Label>Nível</Label>
                    <DetailIcon name="trophy" size={24} color="white" />
                    <DetailText>{nivel}</DetailText>
                  </InputContainer>
                  <InputLine />
                </FormRow>
              </Content>
            </Container>
          </ScrollView>
        );
      case "Times":
        return (
          <ScrollView>
          <Label>Olá</Label>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header />
      <Line />
      <CourtHeader>
        <ImageCourt source={CourtIllustration} />
        <Title>Quadra Parque Ibirapuera</Title>
        <IconContainer>
          <AntDesign name="sharealt" size={24} color="white" />
          <AntDesign name="hearto" size={24} color="white" />
        </IconContainer>
        <MatchName>Baskabira</MatchName>
        <ProfileRow>
          <ProfilePic source={require("@assets/avatar.png")} />
          <ProfilePic source={require("@assets/avatar.png")} />
          <ProfilePic source={require("@assets/avatar.png")} />
          <UserIcon>
            <FontAwesome5 name="user-alt" color="black" />
            <GhostText>10</GhostText>
          </UserIcon>
        </ProfileRow>
      </CourtHeader>
      <TabContainer>
        <TabButton isActive={selectedTab === "Jogo"} onPress={() => setSelectedTab("Jogo")}>
          <TabButtonText isActive={selectedTab === "Jogo"}>Jogo</TabButtonText>
        </TabButton>
        <TabButton isActive={selectedTab === "Times"} onPress={() => setSelectedTab("Times")}>
          <TabButtonText isActive={selectedTab === "Times"}>Times</TabButtonText>
        </TabButton>
      </TabContainer>
      <Content>{renderContent()}</Content>
    </Container>
  );
}
