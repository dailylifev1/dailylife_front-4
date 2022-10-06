import styled from "styled-components";

import devices from "styles/device";

interface Props {
  image: string;
}

function ModalImage({ image }: Props) {
  return (
    <ImageWrapper>
      <Image src={image}/>
    </ImageWrapper>
  );
}

export default ModalImage;

const ImageWrapper = styled.div.attrs({className: 'modal-image'})`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  @media ${devices.mobileS} {
    width: 90%;
    height: 200px;
  }
  @media ${devices.mobileL} {
    height: 300px;
  }
  @media ${devices.laptop} {
    width: 50%;
    height: 100%;
  }
`
const Image = styled.img`
  border-radius: 10px;
  width: 100%;
`