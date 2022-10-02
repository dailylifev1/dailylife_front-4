import styled from 'styled-components';

import PostModal from '../postModal/index';
import CardItem from './CardItem';
import useCards from './useCards';

import { useAppSelector } from 'store/hooks';

function Cards() {
  const { modalOpacity, setModalOpacity } = useCards();
  const cardData = useAppSelector((state) => state.post);
  return (
    <CardsWrapper>
      <CardsContainer>
        <CardsStyled>
          <CardsItems>
            {cardData?.myValues.map((data) => (
              <CardItem
                key={data.boardNum}
                boardNum={data.boardNum}
                src={data.serverFileUrl[0]}
                title={data.title}
                content={data.content}
                heartState={data.heart}
                setModalOpacity={setModalOpacity}
              />
            ))}
            <PostModal
              setModalOpacity={setModalOpacity}
              modalOpacity={modalOpacity}
            />
          </CardsItems>
        </CardsStyled>
      </CardsContainer>
    </CardsWrapper>
  );
}
const CardsItems = styled.div.attrs({
  className: 'cards_itmes',
})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  gap: 15px;
  margin-bottom: 50px;
  padding: 0;
  justify-content: center;
  list-style: none;
`;

const CardsStyled = styled.div`
  margin: 50px 0 45px;
  width: 100%;
`;
const CardsWrapper = styled.div.attrs({
  className: 'cards',
})`
  padding: 4rem;
  background: rgb(255, 255, 255);
`;
const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 55%;
  margin: 0 auto;
`;
export default Cards;
