import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { downIcon, upIcon } from "../../assets";

import { CardBorder, CardContainer } from "./styles";
import { Row } from "../../styles/LayoutStyles";
import { CapitalizedText, LargeTitle, Text } from "../../styles/TextStyles";

type SocialMediaCardProps = {
  id: string;
  icon: string;
  color: string;
  displayName: string;
  totalAmount: string;
  amountName: string;
  amountDayBalance: number;
  darkMode?: boolean;
  cardList?: Array<any>;
  setCardList?: (state: any) => void;
};

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  id,
  icon,
  color,
  displayName,
  totalAmount,
  amountName,
  amountDayBalance,
  darkMode,
  cardList,
  setCardList,
}) => {
  const ref = useRef(null);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    item: { id },
    type: "CARD",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop(() => ({
    accept: "CARD",
    hover(item: any) {
      const dragged = item.id;
      const target = id;

      if (dragged === target) {
        return;
      }
      const draggedObj = cardList?.find((card) => card.id === dragged);
      const targetObj = cardList?.find((card) => card.id === target);

      const draggedIndex = cardList?.findIndex((card) => card.id === dragged);
      const targetIndex = cardList?.findIndex((card) => card.id === target);

      const newArray = cardList?.filter((card, index) => index !== targetIndex);
      newArray?.splice(Number(targetIndex), 0, draggedObj);
      newArray?.splice(Number(draggedIndex), 1, targetObj);

      // @ts-ignore
      setCardList(newArray);
    },
  }));

  dragRef(dropRef(ref));

  return (
    <CardContainer darkMode={darkMode} ref={ref}>
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
