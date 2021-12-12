import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';
import InfoUserCard from '../InfoUserCard';


const InfoUserDetail = function ({ userId }) {
  const { data, error, isLoading } = useSportSeeData('key-data', userId);

  let keyData = data;
  console.log(keyData.calorieCount);

  /*  if (error || isLoading) {
      keyData = null;
    }*/

  console.log(error, isLoading);

  return (
      <CardsGrid>
        <InfoUserCard type="Proteines" value={ keyData.calorieCount } />
      </CardsGrid>
  );
};

InfoUserDetail.propTypes = {
  userId: PropTypes.string.isRequired
};

const CardsGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;
  > * {
    border-radius: 0.25rem;
    overflow: hidden;
  }`;

export default InfoUserDetail;