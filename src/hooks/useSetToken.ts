import axios from 'axios';
import { useEffect } from 'react';

import { getAccessToken } from 'common/utils';
import { myInfoActions } from 'reducers/myInfo';
import { useAppDispatch, useAppSelector } from 'store/hooks';

function useSetToken() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.myInfo);
  useEffect(() => {
    if (getAccessToken() !== '') {
      if (process.env.REACT_APP_HOST !== undefined) {
        axios
          .post(
            `${process.env.REACT_APP_HOST}/api/users/details/${userData.userNum}`,
            null,
            {
              headers: {
                'X-ACCESS-TOKEN': getAccessToken(),
              },
            },
          )
          .then((res) => {
            // dispatch(myInfoActions.updateUserInfo(res.data.data));
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    }
  }, []);
  return userData;
}
export default useSetToken;
