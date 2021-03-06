import { Text, Title } from "../../styles/TextStyles";
import { Divider, HomeContainer, Row } from "./styles";

import { useTheme } from "../../contexts/ThemeContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { informationList, socialMediaList } from "../../data/socialMedia";

import Toggle from "../../components/Toggle";
import SocialMediaCard from "../../components/SocialMediaCard";
import InformationCard from "../../components/InformationCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Home: React.FC = () => {
  const [cardList, setCardList] = useLocalStorage(socialMediaList, "cardList");

  const { darkMode, setDarkMode } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <HomeContainer darkMode={darkMode}>
      <Row className="home-title-row">
        <Title darkMode={darkMode}>Social Media Dashboard</Title>

        {width <= 568 && (
          <>
            <Text darkMode={darkMode}>Total Followers: 23,004</Text>
            <Divider />
          </>
        )}

        <Row className="theme-row">
          <Text darkMode={darkMode}>Dark Mode</Text>
          <Toggle toggled={darkMode} setToggled={setDarkMode} />
        </Row>
      </Row>

      {width > 568 && <Text darkMode={darkMode}>Total Followers: 23,004</Text>}

      <Row className="home-card-list">
        {cardList.map((socialMedia: any) => (
          <SocialMediaCard
            {...socialMedia}
            cardList={cardList}
            setCardList={setCardList}
            darkMode={darkMode}
          />
        ))}
      </Row>

      <Title className={darkMode ? "" : "home-overview"} darkMode={darkMode}>
        Overview - Today
      </Title>

      <Row className="home-card-list-grid">
        {informationList.map((information) => (
          <InformationCard {...information} darkMode={darkMode} />
        ))}
      </Row>
    </HomeContainer>
  );
};

export default Home;
