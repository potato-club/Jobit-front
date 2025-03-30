import styled, { createGlobalStyle } from "styled-components";
import JobItLoginButton from "./JobItLoginButton.png";
import { useNavigate } from "react-router-dom";
import Signup from "./SignUp.js";

function Home() {
  const navigate = useNavigate(); // React Router의 useNavigate 사용

  return (
    <Main>
      <GlobalStyle />
      <MainText>JobIt</MainText>
      <ArtiContainer>
        <Arti1>당신의 취업을 잡으세요.</Arti1>
        <Arti2>잡아잇</Arti2>
      </ArtiContainer>

      <LoginSign>
        <LocalLogin onClick={() => navigate("/signup")}>로그인</LocalLogin>

        {/* 회원가입 클릭 시 이동 */}
      </LoginSign>
    </Main>
  );
}
export default Home;
const GlobalStyle = createGlobalStyle`
 html, body { /* html과 body 요소에 동시에 적용 */
    margin: 0;
    padding: 0; /* 혹시 모를 padding도 제거 */
  }
  @font-face {
    font-family: "JetBrainsMono";
    src: url("/JetBrainsMono-Regular.ttf") format("truetype"); /* 절대 경로 */
    font-weight: normal;
    font-style: normal;
  }
`;
const Main = styled.div`
  width: 100%;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  height: 100vh;
  display: flex;
  border-style: none;
  border-radius: 20%;
  font-size: 20px;
  color: mediumaquamarine;
  background-color: rgb(255, 255, 255);
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

const LocalLogin = styled.div`
  font-size: 25px;
  color: #ffffff;
  font-family: "JetBrainsMono", sans-serif;
  background-image: url(${JobItLoginButton});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px; /* 이미지 비율에 맞춰 적절히 조정 */
  height: 60px; /* 이미지 비율에 맞춰 적절히 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sign = styled.div`
  color: rgb(193, 193, 233);
  padding-bottom: 20px;
`;
const LoginSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const MainText = styled.div`
  font-family: "JetBrainsMono", sans-serif;
  margin-top: 30px;
  font-size: 100px;
  color: #000dc9;
  letter-spacing: -0.05em;
`;
const ArtiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px; /* 간격 줄이기 */
  margin-top: -50px;
`;

const Arti1 = styled.div`
  font-family: "JetBrainsMono", sans-serif;
  font-size: 20px;
  color: #000000;
  white-space: pre-line;
`;
const Arti2 = styled.div`
  font-family: "JetBrainsMono", sans-serif;
  font-size: 20px;
  color: #000000;
  white-space: pre-line;
`;
