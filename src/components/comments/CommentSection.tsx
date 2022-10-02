import { useState } from 'react';

import Comment from 'components/comments/Comment';
import { useAppSelector } from 'store/hooks';

function CommentSection() {
  const { replyList } = useAppSelector((state) => state.comment);
  const [replyHover, setReplyHover] = useState(-1);

  return (
    <div className="comment-section">
      {replyList.map((
        item,
        // index
      ) => (
        <Comment
          key={item.replyNum}
          replyHover={replyHover}
          setReplyHover={setReplyHover}
          // index={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default CommentSection;
