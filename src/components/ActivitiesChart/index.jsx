import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts';
import { themeColor } from '../../utils/style/colorsStyle';
import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';

const ActivitiesChart = function ({ userId }) {
  const { data, error, isLoading } = useSportSeeData('activities', userId);

  let activitiesData = data;

  if (error || isLoading) {
    activitiesData = null;
  }

  return (
      <>
        <ActivitiesChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                data={ activitiesData }
                outerRadius={ window.innerWidth > 1340 ? '70%' : '60%' }
            >
              <PolarGrid radialLines={ false } />
              <PolarAngleAxis
                  dataKey="activity"
                  stroke="white"
                  dy={ 4 }
                  tickLine={ false }
                  tick={ {
                    fontSize: 12,
                    fontWeight: 500
                  } }
              />
              <Radar
                  dataKey="value"
                  fill={ `${ themeColor.primary }` }
                  fillOpacity={ 0.7 }
                  stroke="transparent"
              />
            </RadarChart>
          </ResponsiveContainer>
        </ActivitiesChartContainer>
      </>
  );
};

ActivitiesChart.propTypes = {
  userId: PropTypes.string.isRequired
};

const ActivitiesChartContainer = styled.div`
  background: ${ themeColor.neutral800 };
`;

export default ActivitiesChart;