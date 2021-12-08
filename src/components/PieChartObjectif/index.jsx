import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data01 = [
  {
    'name': 'Group A',
    'value': 1
  }
];

const PieChartObjectif = function () {
  return (
      <>
        <ResponsiveContainer width="10px" height="10px">
          <PieChart width={ 160 } height={ 160 }>
            <Pie data={ data01 }
                 dataKey="value"
                 nameKey="name"
                 cx="50%"
                 cy="50%"
                 innerRadius={ 70 }
                 outerRadius={ 80 }
                 startAngle={ 90 }
                 endAngle={ 450 }
                 fill="#8884d8" />
          </PieChart>
        </ResponsiveContainer>
      </>
  );
};

export default PieChartObjectif;