import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { selectedPostActions } from 'reducers/selectedPostData';

function useCardItem({
  heartState,
  setModalOpacity,
  boardNum,
  src,
  title,
  content,
}) {
  const [like, setLike] = useState(heartState);
  const dispatch = useDispatch();
  const openModal = () => {
    setModalOpacity(1);
  };
  const handleClick = () => {
    openModal();
    dispatch(
      selectedPostActions.updateData({
        boardNum,
        src,
        title,
        content,
      }),
    );
  };

  // useEffect(() => {
  //   async function fetchItemData() {
  //     const items = await axios
  //       .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {
  //         headers: {
  //           'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
  //         },
  //       })
  //       .then((res) => res.data);

  //     dispatch(postActions.updateItems(items));
  //   }
  //   fetchItemData();
  // }, [like]);

  const clickHeartEvent = (e) => {
    e.stopPropagation();
    setLike(!like);
    axios
      .post(
        `${process.env.REACT_APP_HOST}/api/heart/boardHeartPlus`,
        {
          boardNum,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => {
        console.log('AJAX2 in CardItem', res);
      })
      .catch((res) => console.log(res));
  };
  return { handleClick, clickHeartEvent, like };
}

export default useCardItem;
