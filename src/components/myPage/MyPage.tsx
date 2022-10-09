import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import MyPost from './MyPost';
import UserInfo from './UserInfo';

import { getAccessToken } from 'common/utils';

export default function MyPage() {
  const [myPost, setMyPost] = useState<string[]>();
  const accessToken = getAccessToken();
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get('/api/board/myBoard', {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      });
      setMyPost(response.data);
    }
    fetchPost()
      .then((res) => res)
      .catch((err) => err);
    console.log(myPost);
  });
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
