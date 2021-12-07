import Header from '../components/Header';
import styled from 'styled-components';
import NavAside from '../components/NavAside';


function DashBoard() {
  return (
      <>
        <Header />
        <DashboardContainer>
          <NavAside />
        </DashboardContainer>
      </>
  );
}

const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;

export default DashBoard;

