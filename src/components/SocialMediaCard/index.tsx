import { downIcon, upIcon } from "../../assets";
import { Row } from "../../styles/LayoutStyles";
import { CapitalizedText, LargeText, Text } from "../../styles/TextStyles";
import { CardContainer, Icon } from "./styles";

type SocialMediaCardProps = {
  icon: string;
  displayName: string;
  totalAmount: string;
  amountName: string;
  amountDayBalance: number;
};

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  icon,
  displayName,
  totalAmount,
  amountName,
  amountDayBalance,
}) => {
  return (
    <CardContainer>
      <Row>
        <Icon src={icon} />
        <Text>{displayName}</Text>
      </Row>
      <LargeText>{totalAmount}</LargeText>
      <CapitalizedText>{amountName}</CapitalizedText>

      {amountDayBalance > 0 ? (
        <Row>
          <img src={upIcon} />
          {amountDayBalance}
        </Row>
      ) : (
        <Row>
          <img src={downIcon} />
          {Math.abs(amountDayBalance)} Today
        </Row>
      )}
    </CardContainer>
  );
};

export default SocialMediaCard;
