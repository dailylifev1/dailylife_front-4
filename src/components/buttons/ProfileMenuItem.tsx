import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { type TextObj } from 'components/myInfo/myInfoForm';

interface Props extends TextObj {
  setTextArr: Function;
}

function ProfileMenuItem({ id, data, isActive, path, setTextArr }: Props) {
  const navigate = useNavigate();
  function handleClick() {
    if (isActive === undefined) {
      setTextArr((prevState: []) =>
        prevState.map((item: TextObj) => {
          if (item.isActive === true) return { ...item, isActive: undefined };
          if (item.id === id) return { ...item, isActive: true };
          return { ...item, isActive: undefined };
        }),
      );
    }
    navigate(path);
  }
  return (
    <StyledButton isActive={isActive} onClick={() => handleClick()}>
      {data}
    </StyledButton>
  );
}

export default ProfileMenuItem;
const StyledButton = styled.button<{ isActive: boolean | undefined }>`
  display: block;
  margin: 3vh 3vh 3vh 2vh;
  padding: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: ${(props) => (props.isActive === true ? 600 : 400)};
  line-height: 18px;
  color: #3e3e3e;
  border-bottom: ${(props) => (props.isActive === true ? '2px solid black' : 'none')};
`;
