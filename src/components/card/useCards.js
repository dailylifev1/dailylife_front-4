// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postActions } from '../../reducers/post';

import postApi from 'apis/postApi';

function useCards() {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.post); // 스토어의 상태값을 반환해준다.
  const [modalOpacity, setModalOpacity] = useState(0);

  useEffect(() => {
    async function fetchCards() {
      const { data: cardsData } = await postApi.getItemsWhenLoggedIn();
      dispatch(postActions.updateItems(cardsData));
    }
    fetchCards();
  }, [modalOpacity]);
  return {
    cardData,
    modalOpacity,
    setModalOpacity,
  };
}

export default useCards;
