import commentApi from 'apis/commentApi';
import { getCommentDate } from 'common/utils';
import { Icomment } from 'reducers/comment';

const useComments = () => {
  /** 서버로부터 replyTime을 받아서 분/시간/일/주 같은 텍스트로 리턴 */

  /** 게시글 선택 시 replyList(댓글 정보 state) 업데이트 */

  const fetchComments = async (boardNum: number) => {
    const { data: res } = await commentApi.getComments(boardNum);
    // res.data = [{replyTime: '1시간'}, {replyTime: '2시간'}, {replyTime: '1분'}]
    // ['1시간', '2시간', '1분']
    const updatedTimeList = res.data.map((item: Icomment) => ({
      ...item,
      replyTime: getCommentDate(item.replyTime),
    }));
    updatedTimeList.sort((a: Icomment, b: Icomment) => {
      if (a.replyNum > b.replyNum) return 1;
      return -1;
    })
    return updatedTimeList;
  };

  return {
    getCommentDate,
    fetchComments,
  };
};

export default useComments;
