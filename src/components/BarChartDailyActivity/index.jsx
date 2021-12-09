import React from 'react';
import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';

const BarChartDailyActivity = function ({ userId }) {
  const { data, error, isLoading } = useSportSeeData('daily-activity', userId);
  return (
      <p>Salut</p>
  );
};

export default BarChartDailyActivity;