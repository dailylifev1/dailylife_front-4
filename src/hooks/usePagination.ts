import { useEffect, useState } from 'react';

import postApi from 'apis/postApi';
import { postActions } from 'reducers/post';
import { useAppDispatch, useAppSelector } from 'store/hooks';

function usePagination({ boardCountPerPage, pageRangeCount }) {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state);
  const [postCount, setPostCount] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (store.searchResult.result !== '') {
      setPostCount(store.post.myValues.length);
    } else
      postApi
        .getTotalPostCount()
        .then((res) => setPostCount(res.data))
        .catch((err) => console.log(err));
  }, [store.searchResult.result]);

  const handleChange = (selectedPage: number) => {
    postApi
      .getItemByPage(selectedPage)
      .then((res) => {
        dispatch(postActions.updateItems(res.data));
        setPage(selectedPage);
      })
      .catch((err) => console.log(err));
  };

  return {
    boardCountPerPage,
    pageRangeCount,
    postCount,
    handleChange,
    page,
  };
}

export default usePagination;
