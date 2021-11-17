import { ToggleCircle, ToggleContainer } from "./styles";

type ToggleProps = {
  toggled: boolean;
  setToggled: (state: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({ toggled, setToggled }) => {
  return (
    <ToggleContainer toggled={toggled} onClick={() => setToggled(!toggled)}>
      <ToggleCircle
        toggled={toggled}
        className={toggled ? "toggle-circle" : ""}
      />
    </ToggleContainer>
  );
};

export default Toggle;
