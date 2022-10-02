import React from 'react';
import styled from 'styled-components';

import useCardItem from './useCardItem';
import { type OpacityType } from './useCards';

interface Props {
  boardNum: number;
  src: string;
  title: string;
  content: string;
  heartState: boolean;
  setModalOpacity: React.Dispatch<React.SetStateAction<OpacityType>>;
}

function CardItem({
  boardNum,
  src,
  title,
  content,
  heartState,
  setModalOpacity,
}: Props) {
  const { handleClick, clickHeartEvent, like } = useCardItem({
    heartState,
    setModalOpacity,
    boardNum,
    src,
    title,
    content,
  });

  const Fullheart = '/assets/fullHeart.png';
  const Emptyheart = '/assets/heart.png';

  return (
    <CardWrapper onClick={handleClick}>
      <ImgWrapper>
        {src !== '' ? <Thumbnail alt="img" src={src} /> : ''}
        <UnderInfo img={src}>{content}</UnderInfo>
        <Text img={src}>{title}</Text>
        <GradientBar img={src} />
      </ImgWrapper>
      <CardInfo>
        <LikeButton
          onClick={clickHeartEvent}
          src={like ? Fullheart : Emptyheart}
          alt="like"
        />
      </CardInfo>
    </CardWrapper>
  );
}
const CardWrapper = styled.li`
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  aspect-ratio: 1;
  background-color: rgb(247, 247, 247);
  box-shadow: rgba(79, 79, 117, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:nth-of-type(9n + 2),
  &:nth-of-type(9n + 7) {
    grid-column: span 2;
    grid-row: span 2;
    height: 100%;
  }
`;

const Thumbnail = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  transition: all 0.2s linear;
`;
const ImgWrapper = styled.figure`
  position: relative;
  margin: 0 auto 0 auto;
  width: auto;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
const GradientBar = styled.div<{ img: string }>`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  opacity: 0.6;
  background: ${(props) =>
    props.img !== '' ? `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 91.15%
  )`
      : ''};
`;
const CardInfo = styled.div`
  font-family: 'pretendard';
  color: #ffffff;
  cursor: pointer;
  width: 100%;
`;

const Text = styled.h5<{ img: string }>`
  position: absolute;
  margin-left: 0.7vw;
  z-index: 4;
  color: ${(props) => (props.img !== '' ? 'white' : 'black')};
  line-height: 30px;
  display: block;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  bottom: 2vw;
  font-size: 1vw;
  font-weight: 500;
  width: 80%;
`;
const UnderInfo = styled.p<{ img: string }>`
  position: absolute;
  margin-left: 0.7vw;
  z-index: 5;
  color: ${(props) => (props.img !== '' ? 'white' : 'black')};
  width: 80%;
  font-size: 0.9vw;
  font-weight: 300;
  cursor: pointer;
  font-family: 'pretendard';
  line-height: 30px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  bottom: 0.5vw;
`;
const LikeButton = styled.img`
  position: absolute;
  width: 1.4vw;
  height: 1.4vw;
  bottom: 2.8vw;
  right: 0.75vw;
`;
export default CardItem;
