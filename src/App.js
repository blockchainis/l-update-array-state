import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const initialState = [
  {
    id: 0,
    name: "지수",
    like: 0,
    imgUrl: "https://i.imgur.com/fcPM46jb.jpg",
  },
  {
    id: 2,
    name: "리사",
    like: 0,
    imgUrl: "https://i.imgur.com/oGLVAG2b.jpg",
  },
  {
    id: 3,
    name: "로제",
    like: 0,
    imgUrl: "https://i.imgur.com/9tqOid5b.jpg",
  },
  {
    id: 4,
    name: "제니",
    like: 0,
    imgUrl: "https://i.imgur.com/zRM3Awgb.jpg",
  },
];
function App() {
  const [blackPink, setBlackpink] = useState(initialState);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Text>당신의 멤버를 선택해주세요</Text>
        <BlackPinkContainer>
          {blackPink.map((member) => (
            <div key={member.id}>
              <div>{member.like}</div>
              <img src={member.imgUrl} alt={member.name} />
              <DetailBox>
                <div>{member.name}</div>
                <Button>좋아요</Button>
              </DetailBox>
            </div>
          ))}
        </BlackPinkContainer>
      </Wrapper>
    </>
  );
}
const Text = styled.div`
  font-size: 32px;
  margin-bottom: 40px;
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid red;
  &:hover {
    background-color: pink;
  }
`;
const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;
const BlackPinkContainer = styled.div`
  display: grid;
  width: 318px;
  gap: 10px 20px;
  grid-template-columns: 1fr 1fr;
`;

export default App;
