import React from "react";
import NaverLogin from "react-naver-login";
import { useNavigate } from "react-router-dom";
import SignUpLocal from "./SignUpLocal";
import styled, { createGlobalStyle } from "styled-components";
import NaverLoginButton from "./네이버_로그인버튼.png";
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
      <JobItSignup>
        <Signup1>비밀번호찾기</Signup1>
        <Signup2>아이디찾기</Signup2>
        <Signup3 onClick={() => navigate("/lsp")}>회원가입</Signup3>
      </JobItSignup>
      <LoginLocation>
        <NaverLogin
          clientId="0tsRNue91Jpr8WiCObrH"
          callbackUrl="http://localhost:3000/auth/naver/callback"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          render={(props) => (
            <Button src={NaverLoginButton} onClick={props.onClick}></Button>
          )}
        >
          {" "}
        </NaverLogin>
      </LoginLocation>
    </MainFrame>
  );
}

export default Signup;

const GlobalStyle = createGlobalStyle`
 html, body { /* html과 body 요소에 동시에 적용 */
  margin:0;
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
  width: 100%;
  height: 100vh;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const SignupName = styled.div`
  font-family: "JetBrainsMono", sans-serif;
  margin-top: 30px;
  font-size: 100px;
  color: #000dc9;
  justify-self: center;
  letter-spacing: -0.05em;
`;
const Button = styled.img`
  width: 30px;
  height: 30px;
`;

const LoginLocation = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
`;
const JobItSignup = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  height: 10vh;
  flex-direction: row;
  justify-content: space-around;
`;

const Signup1 = styled.div`
  margin-left: auto;
  width: 100px;
  max-height: 100px;
  text-align: center;
  opacity: 55%;
  justify-self: flex-end;
`;
const Signup2 = styled.div`
  width: 100px;
  height: 10px;
  margin-left: 20px;
  justify-self: center;
  margin-right: 20px;
  text-align: center;
  opacity: 55%;
`;
const Signup3 = styled.div`
  width: 100px;
  height: 10px;
  margin-right: auto;
  justify-self: flex-start;
  text-align: center;
  opacity: 55%;
`;
