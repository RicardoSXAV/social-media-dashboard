import { downIcon, upIcon } from "../../assets";
import { Row } from "../../styles/LayoutStyles";
import { CapitalizedText, LargeTitle, Text } from "../../styles/TextStyles";
import { CardBorder, CardContainer } from "./styles";

type SocialMediaCardProps = {
  icon: string;
  color: string;
  displayName: string;
  totalAmount: string;
  amountName: string;
  amountDayBalance: number;
};

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  icon,
  color,
  displayName,
  totalAmount,
  amountName,
  amountDayBalance,
}) => {
  return (
    <CardContainer>
      <CardBorder color={color} />

      <Row className="social-media-row">
        <img src={icon} />
        <Text>{displayName}</Text>
      </Row>
      <LargeTitle>{totalAmount}</LargeTitle>
      <CapitalizedText>{amountName}</CapitalizedText>

      <Row className="day-balance-row">
        {amountDayBalance > 0 ? (
          <>
            <img src={upIcon} />
            <Text className="positive-balance">{amountDayBalance}</Text>
          </>
        ) : (
          <>
            <img src={downIcon} />
            <Text className="negative-balance">
              {Math.abs(amountDayBalance)} Today
            </Text>
          </>
        )}
      </Row>
    </CardContainer>
  );
};

export default SocialMediaCard;
