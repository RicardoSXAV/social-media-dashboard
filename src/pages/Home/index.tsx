import { Text, Title } from "../../styles/TextStyles";
import { HomeContainer, Row } from "./styles";

import { useTheme } from "../../contexts/ThemeContext";
import { informationList, socialMediaList } from "../../data/socialMedia";

import Toggle from "../../components/Toggle";
import SocialMediaCard from "../../components/SocialMediaCard";
import InformationCard from "../../components/InformationCard";

const Home: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <HomeContainer darkMode={darkMode}>
      <Row className="home-title-row">
        <Title darkMode={darkMode}>Social Media Dashboard</Title>
        <Row className="theme-row">
          <Text>Dark Mode</Text>
          <Toggle toggled={darkMode} setToggled={setDarkMode} />
        </Row>
      </Row>

      <Text>Total Followers: 23,004</Text>

      <Row className="home-card-list">
        {socialMediaList.map((socialMedia) => (
          <SocialMediaCard {...socialMedia} darkMode={darkMode} />
        ))}
      </Row>

      <Title className={darkMode ? "" : "home-overview"} darkMode={darkMode}>
        Overview - Today
      </Title>

      <Row className="home-card-list">
        {informationList.map((information) => (
          <InformationCard {...information} darkMode={darkMode} />
        ))}
      </Row>
    </HomeContainer>
  );
};

export default Home;
