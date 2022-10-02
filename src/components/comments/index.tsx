import { useEffect } from 'react';

import CommentCreate from './CommentCreate';
import CommentSection from './CommentSection';

import { OpacityType } from 'components/card/useCards';
import ModalSocial from 'components/postModal/ModalSocial';
import useComments from 'hooks/useComments';
import { updateReplyList } from 'reducers/comment';
import { useAppDispatch, useAppSelector } from 'store/hooks';

interface Props {
  modalOpacity: OpacityType;
}

function Comments({ modalOpacity }: Props) {
  const currentPostData = useAppSelector((state) => state.selectedPostData);
  const { fetchComments } = useComments();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modalOpacity === 1) {
      fetchComments(currentPostData.boardNum)
        .then((updatedTimeList) => {
          dispatch(updateReplyList(updatedTimeList));
        }).catch((err) => {
          console.log(err);
        })
    };
  }, [modalOpacity, currentPostData.boardNum, fetchComments]);

  return (
    <div className="comments-wrapper">
      {/* 좋아요 댓글 갯수 출력하는 코드 */}
      <ModalSocial />
      <hr />
      {/* 댓글 창 시작 */}
      <CommentSection />
      {/* 댓글 작성칸 */}
      <CommentCreate
        currentPostData={currentPostData}
      />
    </div>
  );
}

export default Comments;
