import { getAccessToken, methodFormat } from '../common/utils';
import client from './client';

const PATH = {
  reply: 'api/reply',
  heart: 'api/heart',
};
const commentApi = {
  getComments: methodFormat(async (boardNum: number) => {
    const response = await client.get(`/${PATH.reply}/getReply/${boardNum}`, {
      headers: {
        'X-ACCESS-TOKEN': getAccessToken(),
      },
    });
    return response;
  }),
  getCommentHeart: methodFormat(async (replyNum: number) => {
    const response = await client.get(
      `/${PATH.heart}/countHeartReply/${replyNum}`,
    );
    return response;
  }),
};

export default commentApi;
