import axios from 'axios';
import '../Searching.scss';

import { postActions } from 'reducers/post';
import { useAppDispatch } from 'store/hooks';
import { updateSearchedKeyword } from 'reducers/searchResult';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div id="search-wrap">
      <form action="" onSubmit={submitHandler} autoComplete="on">
        <input
          className="searchBar"
          id="search"
          name="search"
          type="text"
          placeholder="검색"
          onKeyUp={(e) => {
            if (window.event.keyCode === 13) {
              axios
                .get(
                  `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?keyword=${e.target.value}`,
                  {},
                )
                .then((res) => {
                  navigate(`search=${e.target.value}`)
                  dispatch(postActions.updateItems(res.data));
                  dispatch(updateSearchedKeyword(e.target.value));
                })
                .catch((res) => {
                  console.log(res);
                });
            }
          }}
        />
        <input id="search_submit" value="Researcher" type="submit" />
      </form>
    </div>
  );
}

export default SearchForm;
