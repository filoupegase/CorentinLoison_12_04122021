import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Bar
} from 'recharts';

import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';
import { themeColor } from '../../utils/style/colorsStyle';

const BarChartDailyActivity = function ({ userId }) {
  const { data, error, isLoading } = useSportSeeData('daily-activity', userId);

  let dailyActivity = data;

  if (error || isLoading) {
    dailyActivity = {};
  }

  return (
      <BarChartDailyActivityContainer>
        <ChartDailyActivityTitle>Activité quotidienne</ChartDailyActivityTitle>

        <ChartDailyActivityLegend>
          <LegendDetail>
            <ColorBull background={ `${ themeColor.neutral900 }` } />
            Poids (kg)
          </LegendDetail>
          <LegendDetail>
            <ColorBull background={ `${ themeColor.primary }` } />
            Calories brûlées (kCal)
          </LegendDetail>
        </ChartDailyActivityLegend>

      </BarChartDailyActivityContainer>
  );
};

BarChartDailyActivity.propTypes = {
  userId: PropTypes.string.isRequired
};

const BarChartDailyActivityContainer = styled.div`
  position: relative;
  height: 100%;
  background: ${ themeColor.neutral100 };`;

const ChartDailyActivityTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;}`;

const ChartDailyActivityLegend = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: ${ themeColor.neutral500 };
  @media (max-width: 1340px) {
    top: 1rem;
    right: 1.5rem;}`;

const LegendDetail = styled.p`
  margin: 0 0 0 2rem;`;

const ColorBull = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.5rem 0 0;
  border-radius: 50%;
  background: ${ (props) => props.background };`;

export default BarChartDailyActivity;
