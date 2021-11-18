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
  darkMode?: boolean;
};

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  icon,
  color,
  displayName,
  totalAmount,
  amountName,
  amountDayBalance,
  darkMode,
}) => {
  return (
    <CardContainer darkMode={darkMode}>
      <CardBorder color={color} />

      <Row className="social-media-row">
        <img src={icon} alt="social-media-icon" />
        <Text darkMode={darkMode}>{displayName}</Text>
      </Row>
      <LargeTitle darkMode={darkMode}>{totalAmount}</LargeTitle>
      <CapitalizedText>{amountName}</CapitalizedText>

      <Row className="day-balance-row">
        {amountDayBalance > 0 ? (
          <>
            <img src={upIcon} alt="up-icon" />
            <Text className="positive-balance" darkMode={darkMode}>
              {amountDayBalance}
            </Text>
          </>
        ) : (
          <>
            <img src={downIcon} alt="down-icon" />
            <Text className="negative-balance" darkMode={darkMode}>
              {Math.abs(amountDayBalance)} Today
            </Text>
          </>
        )}
      </Row>
    </CardContainer>
  );
};

export default SocialMediaCard;
