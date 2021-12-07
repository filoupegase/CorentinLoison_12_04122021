import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data01 = [
  {
    'name': 'Group A',
    'value': 400
  },
  {
    'name': 'Group B',
    'value': 300
  },
  {
    'name': 'Group C',
    'value': 300
  },
  {
    'name': 'Group D',
    'value': 200
  },
  {
    'name': 'Group E',
    'value': 278
  },
  {
    'name': 'Group F',
    'value': 189
  }
];

const PieChartCom = function () {
  return (
      <>
        <ResponsiveContainer width="100%" height="100%">
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

export default PieChartCom;