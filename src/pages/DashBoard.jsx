import Header from '../components/Header';
import styled from 'styled-components';
import { themeColor } from '../utils/style/colorsStyle';
import NavAside from '../components/NavAside';

/*
import PieChartObjectif from '../components/PieChartObjectif';
*/


function DashBoard() {
  return (
      <>
        <Header />
        <DashboardContainer>
          <NavAside />

          <SectionContent>
            <MainTitle>
              Bonjour <SpanUserName>{ 'UserName' }</SpanUserName>
            </MainTitle>
            <MessageUser>
              <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            </MessageUser>


          </SectionContent>
        </DashboardContainer>
      </>
  );
}

const DashboardContainer = styled.main`
display: grid;
grid-template-columns: 7.5rem 1fr;
`;

const SectionContent = styled.section`
  padding: 3rem 5rem;
  @media (max-width: 1340px) {
    padding: 1.5rem 2rem;
  }
`;

const MainTitle = styled.h1`
margin: 0;
font-size: 48px;
font-weight: 500;
@media (max-width: 1340px){
font-size: 2.5rem}
`;

const SpanUserName = styled.span`
color: ${ themeColor.primary };
`;

const MessageUser = styled.p`
  margin: 2rem 0 4rem 0;
  font-size: 18px;
`;

export default DashBoard;

