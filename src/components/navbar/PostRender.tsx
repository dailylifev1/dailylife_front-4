import { useEffect, useState } from 'react';

import WritePageButton from 'components/Icons/WritePageButton';
import NewUserPost from 'components/navbar/WritePage';

function PostRender() {
  const [openPostModal, setOpenPostModal] = useState(false);

  const changeOpenPostModal = () => {
    setOpenPostModal(false);
  };

  useEffect(() => {
    if (openPostModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [openPostModal]);

  return (
    <div>
      <WritePageButton setOpenPostModal={setOpenPostModal} />
      {openPostModal && (
        <NewUserPost changeOpenPostModal={changeOpenPostModal} />
      )}
    </div>
  );
}

export default PostRender;
