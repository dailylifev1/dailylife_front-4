import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { postActions } from 'reducers/post';
import { updateSearchedKeyword } from 'reducers/searchResult';

function NavLogo() {
  const store = useAppSelector((state => state.post))
  const dispatch = useAppDispatch();
  return (
    <div className="nav-header">
      <button className="nav-title" onClick={() => {
        dispatch(postActions.updateIsLogoClicked(!store.isLogoClicked));
        dispatch(updateSearchedKeyword(''))
      }} type="button">
        <Link to="/">
          <img src='/assets/logo.png' alt='mainLogo' />
        </Link>
      </button>
    </div>
  );
}

export default NavLogo;
