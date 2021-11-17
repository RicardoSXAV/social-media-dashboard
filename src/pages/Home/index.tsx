import { Text, Title } from "../../styles/TextStyles";
import { HomeContainer, Row } from "./styles";

import Toggle from "../../components/Toggle";
import { informationList, socialMediaList } from "../../data/socialMedia";
import SocialMediaCard from "../../components/SocialMediaCard";
import InformationCard from "../../components/InformationCard";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Row className="home-title-row">
        <Title>Social Media Dashboard</Title>
        <Row>
          <Text>Dark Mode</Text>
          <Toggle />
        </Row>
      </Row>

      <Text>Total Followers: 23,004</Text>

      <Row className="home-card-list">
        {socialMediaList.map((socialMedia) => (
          <SocialMediaCard {...socialMedia} />
        ))}
      </Row>

      <Title className="home-overview">Overview - Today</Title>

      <Row className="home-card-list">
        {informationList.map((information) => (
          <InformationCard {...information} />
        ))}
      </Row>
    </HomeContainer>
  );
};

export default Home;
