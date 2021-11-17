import { Text, Title } from "../../styles/TextStyles";
import { HomeContainer, Row } from "./styles";

import Toggle from "../../components/Toggle";
import { socialMediaList } from "../../data/socialMedia";
import SocialMediaCard from "../../components/SocialMediaCard";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Row>
        <Title>Social Media Dashboard</Title>
        <Text>Dark Mode</Text>
        <Toggle />
      </Row>

      <Text>Total Followers: 23,004</Text>

      <Row className="home-card-list">
        {socialMediaList.map((socialMedia) => (
          <SocialMediaCard {...socialMedia} />
        ))}
      </Row>
    </HomeContainer>
  );
};

export default Home;
