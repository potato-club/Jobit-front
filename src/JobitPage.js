import styled from "styled-components";
const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const PostList = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Sidebar = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const PostCard = styled.div`
  background: #ddd;
  border-radius: 10px;
  padding: 16px;
`;

function Main() {
  return (
    <LayoutSec>
      <LayoutFirst>
        <JobitHeader>JobIt</JobitHeader>
        <MenuGroup>
          <JobitTrendHeader>잡아잇트렌드</JobitTrendHeader>
          <InformationHeader>정보공유게시판</InformationHeader>
          <QNAHeader>현직자 Q&A</QNAHeader>
        </MenuGroup>
      </LayoutFirst>
      <HeaderStroke />
      <ContentArea>
        <PostList>
          <PostCard>
            <h3>Tailwindcss가 많이 쓰이는 이유</h3>
            <p>#프론트 #백엔드 #소프트웨어개발</p>
          </PostCard>
          {/* 여러 개 복제 가능 */}
        </PostList>
        <Sidebar>
          <h3>채용공고🔥</h3>
          <p>한국신용정보원</p>
          <p>에스코어</p>
        </Sidebar>
      </ContentArea>
    </LayoutSec>
  );
}

export default Main;

const LayoutFirst = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 1920px;
  align-items: center;
  padding: 0 40px; /* 좌우 여백 */
`;
const JobitTrendHeader = styled.div`
  width: 150px;
  height: 100px;
  flex-shrink: 0;
  color: #000;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.8px;
  font-family: "JetBrains Mono";
`;
const InformationHeader = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
  flex-shrink: 0;
  color: #000;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.8px;
  font-family: "JetBrains Mono";
  opacity: 0.55;
`;
const QNAHeader = styled.div`
  width: 150px;
  height: 100px;
  flex-shrink: 0;
  color: #000;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.8px;
  font-family: "JetBrains Mono";
  opacity: 0.55;
`;
const JobitHeader = styled.div`
  width: 309px;
  height: 100px;
  flex-shrink: 0;
  color: rgba(0, 13, 201, 0.91);
  display: flex;
  text-align: center;
  font-family: "JetBrains Mono";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -6px;
`;
const LayoutSec = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderStroke = styled.div`
  width: 1920px;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
`;
const MenuGroup = styled.div`
  display: flex;
  gap: -150px; /* 메뉴 사이 간격 */
  margin-left: -180px; /* JobIt과 메뉴 사이 간격 */
`;
