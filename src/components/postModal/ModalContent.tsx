import styled from 'styled-components';

import WriterInfo from './WriterInfo';

import Comments from 'components/comments';
import postData from 'mocks/postData';
import devices from 'styles/device';

function ModalContent(props) {
  const { currentPostData, modalOpacity, setModalOpacity } = props;
  const { title, content } = currentPostData;
  function contentGenerator(data: string) {
    if (data !== '') return data;
    return postData.map((item) => <div key={item.id}>item.content</div>);
  }

  return (
    <Container>
      <WriterInfo setModalOpacity={setModalOpacity} />
      <Content>
        <Title>{title}</Title>
        <Text>{contentGenerator(content)}</Text>
        {/* <div className="text-in-modal">{currentPostData.content}</div> */}
      </Content>
      <Comments modalOpacity={modalOpacity}/>
    </Container>
  );
}

export default ModalContent;

const Container = styled.div.attrs({className: 'modal-content-container'})`
  position: relative;
  @media ${devices.mobileS} {
    width: 90%;    
  }
  @media ${devices.laptop} {
    width: 50%;
    margin-left: 20px;
    height: 100%;
  }
`
const Content = styled.div.attrs({className: 'modal-post-content'})`
  text-align: start;
  margin-top: 12px;
`
const Title = styled.h1`
  text-align: start;
  
  @media ${devices.mobileS} {
    font-size: 25px;
  }
  @media ${devices.mobileM} {
    font-size: xx-large;
  }
`
const Text = styled.div`
  max-height: 121px;
  overflow-y: auto;
  margin-top: 1.2vh;
  margin-bottom: 0.5vh;

  @media ${devices.mobileS} {

  }
  @media ${devices.laptop} {
    height: 17vh;
  }
`