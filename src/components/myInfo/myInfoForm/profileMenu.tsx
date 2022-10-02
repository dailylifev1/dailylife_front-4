import { TextObj } from '.';

import ProfileMenuItem from 'components/buttons/ProfileMenuItem';


function ProfileMenu({ textArr, setTextArr }) {
  return (
    <div className="profile-menu">
      {textArr.map((item: TextObj) =>
        <ProfileMenuItem key={item.id} {...item} setTextArr={setTextArr} />
      )}
    </div>
  );
}

export default ProfileMenu;
