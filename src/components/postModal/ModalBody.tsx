import React from 'react';
import styled from 'styled-components/macro';

import ModalContent from './ModalContent';
import ModalImage from './ModalImage';

import { OpacityType } from 'components/card/useCards';
import { ISelectedPostData } from 'reducers/selectedPostData';

interface Props {
  currentPostData: ISelectedPostData;
  modalOpacity: 0 | 1,
  setModalOpacity: React.Dispatch<React.SetStateAction<OpacityType>>
}

function ModalBody(props: Props) {
  const { currentPostData, modalOpacity, setModalOpacity } = props;
  const { src } = currentPostData;
  return (
    <ModalBodyWrapper onClick={(e) => e.stopPropagation()}>
      <ModalImage image={src} />
      <ModalContent
        currentPostData={currentPostData}
        modalOpacity={modalOpacity}
        setModalOpacity={setModalOpacity}
      />
    </ModalBodyWrapper>
  );
}

export default ModalBody;

const ModalBodyWrapper = styled.div`
  position: absolute;
  padding: 1em;
  display: flex;
  width: 1183px;
  height: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  visibility: visible;
`;
