import PostRender from './PostRender';

import MyPageIcon from 'components/Icons/MyPageIcon';
import { useAppSelector } from 'store/hooks';

function NavLinks() {
  const tokenInfo = useAppSelector((state) => state.authToken);

  return (
    <div className="nav-links">
      <PostRender />
      <MyPageIcon path={tokenInfo.accessToken !== '' ? '/myPage' : '/login'} />
    </div>
  );
}

export default NavLinks;
