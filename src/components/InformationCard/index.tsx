import { CardContainer } from "./styles";
import { downIcon, upIcon } from "../../assets";
import { Row } from "../../styles/LayoutStyles";
import { Text, Title } from "../../styles/TextStyles";

type InformationCardProps = {
  name: string;
  amount: string;
  icon: string;
  balance: number;
  darkMode?: boolean;
};

const InformationCard: React.FC<InformationCardProps> = ({
  name,
  amount,
  icon,
  balance,
  darkMode,
}) => {
  return (
    <CardContainer darkMode={darkMode}>
      <Row className="information-row">
        <Text>{name}</Text>
        <img src={icon} />
      </Row>

      <Row className="information-row">
        <Title darkMode={darkMode}>{amount}</Title>
        <Row className="information-balance-row">
          {balance > 0 ? (
            <>
              <img src={upIcon} />
              <Text className="positive-balance">{balance}%</Text>
            </>
          ) : (
            <>
              <img src={downIcon} />
              <Text className="negative-balance">{Math.abs(balance)}%</Text>
            </>
          )}
        </Row>
      </Row>
    </CardContainer>
  );
};

export default InformationCard;
