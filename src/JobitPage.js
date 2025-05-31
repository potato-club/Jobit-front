import styled, { createGlobalStyle } from "styled-components";
function Main() {
  return <Jobit>JobIt</Jobit>;
}

export default Main;

const GlobalStyle = createGlobalStyle`
 html, body { /* html과 body 요소에 동시에 적용 */
    margin: 0;
    padding: 0; /* 혹시 모를 padding도 제거 */
  }
  @font-face {
    font-family: "JetBrainsMono";
    src: url("/JetBrainsMono-Regular.ttf") format("truetype"); /* 절대 경로 */
   

  }
`;
const Jobit = styled.div`
  width: 309px;
  height: 50px;
  flex-shrink: 0;
  color: rgba(0, 13, 201, 0.91);

  text-align: center;
  font-family: "JetBrains Mono";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -6px;
`;
