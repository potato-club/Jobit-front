import React from "react";
import styled from "styled-components";

const SignUpLocal = ({ text }) => {
  return (
    <LSignup>
      <Id placeholder="아이디" />
      <Passwd placeholder="비밀번호" type="password" />
    </LSignup>
  );
};

export default SignUpLocal;

const LSignup = styled.div`
  width: 350px; /* 이미지에 맞춰 너비 조정 */
  height: 250px; /* 이미지에 맞춰 높이 조정 */
  border-radius: 10px; /* 이미지에 맞춰 둥근 모서리 조정 */
  border: 1px solid #ccc; /* 이미지에 맞춰 테두리 설정 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  background-color: white; /* 배경색 흰색 설정 */
  padding: 20px; /* 내부 여백 추가 */
`;

const Id = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px; /* 비밀번호 입력 필드와의 간격 */
`;

const Passwd = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`;
