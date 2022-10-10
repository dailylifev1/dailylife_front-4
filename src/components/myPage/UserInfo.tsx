import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import userApi from 'apis/userApi';
import { myInfoActions } from 'reducers/myInfo';
import { useAppSelector } from 'store/hooks';

function UserInfo() {
  const userData = useAppSelector((state) => state.myInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [usersData, setUsersData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const { data: userInfo } = await userApi.getUserInfo(userData.userNum);
      console.log(userData.userNum);
      console.log(userInfo.data.data);
      dispatch(myInfoActions.updateUserNum(userInfo.data.data));
    }
    fetchData()
      .then((res) => res)
      .catch((err) => err);
  }, [userData.userNum]);
  return (
    <UserInfoWrapper>
      <UserImage>
        <img src="" alt="userImage" />
      </UserImage>

      <UserName>{userData.userName}</UserName>
      <UserId>{userData.userId}</UserId>

      <FollowInfo>
        <Followers>팔로워 0명</Followers>
        <Followings>팔로잉 0명</Followings>
      </FollowInfo>
      <ModifyProfile onClick={() => navigate('/profileModify')}>
        프로필 수정
      </ModifyProfile>
    </UserInfoWrapper>
  );
}

const ModifyProfile = styled.button`
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #909090;
  padding: 5px 10px 5px 10px;
`;

const Followers = styled.p`
  margin-right: 10px;
`;
const Followings = styled.p``;

const UserId = styled.div`
  margin-top: 8px;
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #6a6a6a;
`;

const FollowInfo = styled(UserId)`
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  margin-top: 12px;
  margin-bottom: 8px;
`;
const UserImage = styled.div`
  background: #422020;
  border-radius: 120px;
  width: 120px;
  height: 120px;
  overflow: hidden;
`;

const UserInfoWrapper = styled.div`
  width: 50%;
  border-bottom: solid 2px #eaeaea;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  padding-bottom: 20px;
  letter-spacing: 0.01em;
`;

export default UserInfo;
