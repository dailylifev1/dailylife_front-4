import styled from 'styled-components';

import MyPost from './MyPost';
import UserInfo from './UserInfo';

export default function MyInfo() {
  return (
    <MyInfoWrapper>
      <UserInfo />
      <MyPost />
    </MyInfoWrapper>
  );
}
const MyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
