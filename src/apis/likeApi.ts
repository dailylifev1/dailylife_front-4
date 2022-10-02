import client from './client';

import { methodFormat } from 'common/utils';

const PATH = `api/heart`;

const likeApi = {
  /** 게시글 좋아요 업데이트 */
  updateBoardHeart: methodFormat(
    async (boardNum: number, accessToken: string) => {
      const response = await client.post(
        `${PATH}/boardHeartPlus`,
        {
          boardNum,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        },
      );
      return response.data;
    },
  ),
  updateCommentHeart: methodFormat(
    async (replyNum: number, accessToken: string) => {
      const response = await client.post(
        `${PATH}/replyHeartPlus`,
        {
          replyNum,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        },
      );
      return response.data;
    },
  ),
};

export default likeApi;
