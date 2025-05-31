import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const SignUpLocal = ({ text }) => {
  const navgate = useNavigate();
  return (
    <MainFrame>
      <LSignup>
        <Id placeholder="아이디" />
        <Passwd placeholder="비밀번호" type="password" />
        <LoginButton2 onClick={() => navgate("/jp")}>로그인</LoginButton2>
      </LSignup>
    </MainFrame>
  );
};

export default SignUpLocal;

const LSignup = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 15px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

const Id = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 15px 15px 0 0; /* 위쪽 모서리 둥글게 */
  border: 1px solid #ccc;

  font-size: 16px;
  /* 비밀번호 입력 필드와의 간격 */
`;

const Passwd = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 0 0 15px 15px; /* 아래쪽 모서리 둥글게 */
  border: 1px solid #ccc;
  border-top: none; /* 아이디 입력 필드와 붙이기 */
  font-size: 16px;
`;
const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: auto;
`;
const LoginButton2 = styled.div`
  display: flex;
  width: 300px;
  height: 40px;
  color: #ffffff;
  justify-content: center;
  background-color: #000dc9;
  align-items: center;
  border-radius: 40px;
  padding-bottom: 1px;
  margin-top: auto;
  opacity: 55%;
`;
