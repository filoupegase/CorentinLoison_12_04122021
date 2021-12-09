import { useParams } from 'react-router';
import Header from '../components/Header';
import styled from 'styled-components';
import { themeColor } from '../utils/style/colorsStyle';
import NavAside from '../components/NavAside';
import { useSportSeeData } from '../services/CustomHooks/useSportSeeData';
import PieChartTodayScore from '../components/PieChartTodayScore';

function DashBoard() {
  const { userId } = useParams();

  const { data, error } = useSportSeeData('firstName', `user/${ userId }`);
  const userName = data;

  if (error) {
    return (
        <>
          <Header />
          <DashboardContainer>
            <SectionContent>
              <MainTitle>
                Bonjour
              </MainTitle>

            </SectionContent>
          </DashboardContainer>
        </>
    );
  }
  return (
      <>
        <Header />
        <DashboardContainer>
          <NavAside />

          <SectionContent>
            <MainTitle>
              Bonjour <SpanUserName>{ userName.toString() }</SpanUserName>
            </MainTitle>
            <MessageUser>
              <span>Félicitation { userName.toString() } ! Vous avez explosé vos objectifs hier 👏</span>
            </MessageUser>

            <GridContainer>
              <ChartsGridDiv>
                <PieChartTodayScore userId={ userId } />
              </ChartsGridDiv>
            </GridContainer>
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 1340px) {
    gap: 1rem;
  }`;

const ChartsGridDiv = styled.div`
  grid-column: 1/4;
  display: grid;
  grid-template: 20rem 16rem / repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 1340px) {
    grid-template: 18rem 14rem / repeat(3, 1fr);
    gap: 1rem;
  }
  > * {
    border-radius: 5px;
    overflow: hidden;
  }`;

export default DashBoard;

