import React from "react";
import NaverLogin from "react-naver-login";
import { useNavigate } from "react-router-dom";
import SignUpLocal from "./SignUpLocal";
import styled, { createGlobalStyle } from "styled-components";
function Signup() {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log("네이버 로그인 성공:", response);
    // 백엔드에 토큰 전달 가능
    navigate("/"); // 로그인 후 이동할 페이지
  };

  const handleFailure = (error) => {
    console.log("네이버 로그인 실패:", error);
  };

  return (
    <MainFrame>
      <GlobalStyle />
      <SignupName>JobIt</SignupName>
      <SignUpLocal />
      <NaverLogin
        clientId="0tsRNue91Jpr8WiCObrH"
        callbackUrl="http://localhost:3000/auth/naver/callback"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        render={(props) => (
          <Button onClick={props.onClick}>네이버 로그인</Button>
        )}
      >
        {" "}
        <button>네이버 로그인</button>
      </NaverLogin>
      <Identification onClick={() => navigate("/lsp")}>
        JobIt 회원가입
      </Identification>
    </MainFrame>
  );
}

export default Signup;

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
const MainFrame = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SignupName = styled.div`
  font-family: "JetBrainsMono", sans-serif;
  margin-top: 30px;
  font-size: 100px;
  color: #000dc9;
  letter-spacing: -0.05em;
`;
const Button = styled.div`
  background-color: #03c75a; // 네이버 그린
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: "none";
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Identification = styled.div`
  background-color: "gray";
  color: "white";
`;
