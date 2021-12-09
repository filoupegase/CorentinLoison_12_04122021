import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
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

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
              data={ dailyActivity }
              margin={ { top: 80, right: 48, bottom: 32, left: 48 } }
              barGap={ 8 }
              barCategoryGap="40%"
          >
            <CartesianGrid
                strokeDasharray="3 3"
                vertical={ false }
                stroke={ `${ themeColor.neutral200 }` }
            />
            <XAxis
                dataKey="day"
                dy={ 16 }
                padding={ { left: -48, right: -48 } }
                stroke={ `${ themeColor.neutral400 }` }
                tickLine={ false }
                tick={ { fontSize: 14, fontWeight: 500 } }
            />
            <YAxis
                yAxisId="kg"
                dataKey="kilogram"
                domain={ ['dataMin - 1', 'dataMax + 2'] }
                allowDecimals={ false }
                dx={ 48 }
                orientation="right"
                stroke={ `${ themeColor.neutral400 }` }
                axisLine={ false }
                tickLine={ false }
            />
            <YAxis
                yAxisId="cal"
                dataKey="calories"
                domain={ [0, 'dataMax + 50'] }
                hide={ true }
            />
            <Bar
                yAxisId="kg"
                dataKey="kilogram"
                maxBarSize={ 8 }
                fill={ `${ themeColor.neutral900 }` }
                radius={ [50, 50, 0, 0] }
            />
            <Bar
                yAxisId="cal"
                dataKey="calories"
                maxBarSize={ 8 }
                fill={ `${ themeColor.primary }` }
                radius={ [50, 50, 0, 0] }
            />
            <Tooltip content={ <CustomTooltip /> } cursor={ { fill: 'rgba(0, 0, 0, 0.1)' } } />
          </BarChart>
        </ResponsiveContainer>
      </BarChartDailyActivityContainer>
  );
};

BarChartDailyActivity.propTypes = {
  userId: PropTypes.string.isRequired
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
        <TooltipContainer>
          <TooltipLine background={ `${ themeColor.primary }` }>
            { `${ payload[0].value } kg` }
          </TooltipLine>
          <TooltipLine background={ `${ themeColor.primary }` }>
            { `${ payload[1].value } kCal` }
          </TooltipLine>
        </TooltipContainer>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
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

const TooltipContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);`;

const TooltipLine = styled.p`
  padding: 0.75rem;
  margin: 0;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  background: ${ (props) => props.background };`;

export default BarChartDailyActivity;
