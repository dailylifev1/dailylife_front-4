import { useEffect, useState } from 'react';

import commentApi from 'apis/commentApi';

const useCommentHearts = (replyNum: number) => {
    const [commentHearts, setCommentHearts] =
        useState(null);

    useEffect(() => {
        commentApi.getCommentHeart(replyNum)
            .then((res) => setCommentHearts(res.data))
            .catch((err) => console.log(err));
    }, [replyNum]);

    return { commentHearts };
};

export default useCommentHearts;
