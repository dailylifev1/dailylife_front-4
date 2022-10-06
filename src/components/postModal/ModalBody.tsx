import React from 'react';
import styled from 'styled-components/macro';

import ModalContent from './ModalContent';
import ModalImage from './ModalImage';

import ModalCloseButton, { ModalClose } from 'components/buttons/ModalCloseButton';
import { OpacityType } from 'components/card/useCards';
import { ISelectedPostData } from 'reducers/selectedPostData';
import devices from 'styles/device';

interface Props {
  currentPostData: ISelectedPostData;
  modalOpacity: 0 | 1;
  setModalOpacity: React.Dispatch<React.SetStateAction<OpacityType>>;
}

function ModalBody(props: Props) {
  const { currentPostData, modalOpacity, setModalOpacity } = props;
  const { src } = currentPostData;
  return (
    <ModalBodyWrapper onClick={(e) => e.stopPropagation()}>
      <ModalCloseButtonWrapper>
        <ModalCloseButton setModalOpacity={setModalOpacity}/>
      </ModalCloseButtonWrapper>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  visibility: visible;

  @media ${devices.mobileS} {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 90%;
    height: auto;
  }
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    max-width: 1183px;
    width: 90%;
    height: 650px;
    & > .close-button-wrapper {
      display: none;
    }
  }
  `;
const ModalCloseButtonWrapper = styled.div.attrs({className: 'close-button-wrapper'})`
  width: 100%;
  display: flex;
  justify-content: right;
  padding-right: 10px;
  & > ${ModalClose} > svg > path {
      stroke: #42413C;
  }
`