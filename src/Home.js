import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import Signup from "./SignUp.js";

function Home() {
  const navigate = useNavigate(); // React Router의 useNavigate 사용

  return (
    <MainBody>
      <MainHeader>
        <MainText>JobIt</MainText>

        <Arti1>당신의 취업을 잡으세요. 잡아잇</Arti1>

        <LoginSign>
          <Login onClick={() => navigate("/signup")}>로그인</Login>

          {/* 회원가입 클릭 시 이동 */}
        </LoginSign>
      </MainHeader>
    </MainBody>
  );
}
export default Home;
const MainHeader = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  border-style: none;
  border-radius: 20%;
  font-size: 20px;
  color: mediumaquamarine;
  background-color: rgb(255, 255, 255);
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const MainBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Login = styled.div`
  color: rgb(193, 193, 233);
  padding-bottom: 20px;
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
  font-size: 50px;
  color: #000dc9;
  font-style: jetBrains Mono;
`;
const Arti1 = styled.div`
  font-size: 20px;
  color: #000000;
  white-space: pre-line;
`;
const Arti2 = styled.div`
  font-size: 20px;
  color: #000000;
`;
