import { useState } from 'react';

import likeApi from "apis/likeApi";

interface Props {
  replyNum?: number;
}

function LikeIcon({ replyNum }: Props) {
  const [likeState, setLikeState] = useState(false);
  const handleClick = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken !== null) fetchCommentHeart().then((res) => res).catch((err) => err);
    else alert('로그인 후 이용가능합니다.')

    async function fetchCommentHeart() {
      const data = await likeApi.updateCommentHeart(replyNum, accessToken);
      setLikeState(data.ok);
    };
  }
  return (
    <button type="button" onClick={handleClick}>
      {
        likeState ? (
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.65618 10.9688C7.03118 14.9062 8.99993 16.0312 8.99993 16.0312C8.99993 16.0312 10.9687 14.9062 14.3437 10.9688C17.7187 7.03125 15.4687 3.09375 12.6562 3.09375C9.84368 3.09375 8.99993 6.46875 8.99993 6.46875C8.99993 6.46875 8.15618 3.09375 5.34368 3.09375C2.53118 3.09375 0.28118 7.03125 3.65618 10.9688Z" fill="#FA2828" stroke="#FA2828" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        )
          :
          (<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.65618 10.9688C7.03118 14.9062 8.99993 16.0312 8.99993 16.0312C8.99993 16.0312 10.9687 14.9062 14.3437 10.9688C17.7187 7.03125 15.4687 3.09375 12.6562 3.09375C9.84368 3.09375 8.99993 6.46875 8.99993 6.46875C8.99993 6.46875 8.15618 3.09375 5.34368 3.09375C2.53118 3.09375 0.28118 7.03125 3.65618 10.9688Z" fill="white" stroke="#6A6A6A" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          )
      }
    </button >
  );
}

export default LikeIcon;
