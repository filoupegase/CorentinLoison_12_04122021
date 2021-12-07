import Header from '../components/Header';
import styled from 'styled-components';
import NavAside from '../components/NavAside';
import PieChartCom from '../components/PieChart';


function DashBoard() {
  return (
      <>
        <Header />
        <DashboardContainer>
          <NavAside />
          <SectionContent>
            <PieChartCom />
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

export default DashBoard;

