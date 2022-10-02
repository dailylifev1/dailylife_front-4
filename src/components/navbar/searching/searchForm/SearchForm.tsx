import axios from 'axios';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Searching.scss';

import { postActions } from 'reducers/post';
import { updateSearchedKeyword } from 'reducers/searchResult';
import { useAppDispatch } from 'store/hooks';

function SearchForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div id="search-wrap">
      <form action="" onSubmit={(e) => submitHandler(e)} autoComplete="on">
        <input
          className="searchBar"
          id="search"
          name="search"
          type="text"
          placeholder="검색"
          onKeyUp={(e) => {
            const element = e.target as HTMLInputElement;
            if (e.key === 'Enter') {
              if (process.env.REACT_APP_HOST !== undefined) {
                axios
                  .get(
                    `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?keyword=${element.value}`,
                    {},
                  )
                  .then((res) => {
                    navigate(`search=${element.value}`);
                    dispatch(postActions.updateItems(res.data));
                    dispatch(updateSearchedKeyword(element.value));
                  })
                  .catch((res) => {
                    console.log(res);
                  });

              }
            }
          }}
        />
        <input id="search_submit" value="Researcher" type="submit" />
      </form>
    </div>
  );
}

export default SearchForm;
