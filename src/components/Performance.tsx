
import React, { useState } from 'react';
import { Line } from 'recharts';
import { Button } from '@/components/ui/button';

// Import the necessary components from recharts
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const Performance: React.FC = () => {
  const [viewMode, setViewMode] = useState<'growth' | 'daily'>('growth');

  // Sample data for the chart
  const growthData = [
    { month: 'Jan', value: 1000 },
    { month: 'Feb', value: 1700 },
    { month: 'Mar', value: 2500 },
    { month: 'Apr', value: 3700 },
    { month: 'May', value: 5500 },
    { month: 'Jun', value: 8200 },
    { month: 'Jul', value: 12000 },
  ];

  const dailyData = [
    { month: 'Jan', value: 2.1 },
    { month: 'Feb', value: 1.9 },
    { month: 'Mar', value: 2.3 },
    { month: 'Apr', value: 1.8 },
    { month: 'May', value: 2.2 },
    { month: 'Jun', value: 2.0 },
    { month: 'Jul', value: 2.1 },
  ];

  const currentData = viewMode === 'growth' ? growthData : dailyData;
  const formatYAxis = viewMode === 'growth' ? (value: number) => `$${value}` : (value: number) => `${value}%`;

  return (
    <section id="performance" className="py-20 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('./assets/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Performance Dashboard</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            See how our AI trading system consistently delivers results for our investors.
          </p>
        </div>

        <div className="bg-secondary/30 rounded-lg p-6 md:p-8 glass-morphism" data-aos="fade-up">
          {/* View toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button
                onClick={() => setViewMode('growth')}
                variant={viewMode === 'growth' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none ${viewMode === 'growth' ? 'bg-primary' : 'bg-transparent border-white/20'}`}
              >
                Cumulative Growth
              </Button>
              <Button
                onClick={() => setViewMode('daily')}
                variant={viewMode === 'daily' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none ${viewMode === 'daily' ? 'bg-primary' : 'bg-transparent border-white/20'}`}
              >
                Daily ROI %
              </Button>
            </div>
          </div>

          {/* Chart */}
          <div className="w-full h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={currentData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#ccc' }}
                  axisLine={{ stroke: '#666' }}
                />
                <YAxis 
                  tickFormatter={formatYAxis}
                  tick={{ fill: '#ccc' }}
                  axisLine={{ stroke: '#666' }}
                  domain={viewMode === 'daily' ? [0, 'dataMax + 1'] : [0, 'dataMax + 1000']}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444', borderRadius: '8px' }}
                  formatter={(value: number) => viewMode === 'growth' ? [`$${value}`, 'Portfolio Value'] : [`${value}%`, 'Daily Return']}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name={viewMode === 'growth' ? "Portfolio Value" : "Daily Return %"}
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#8B5CF6', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Audit note */}
          <p className="text-center text-gray-400 mt-6 italic">
            * Performance data is audited monthly by an independent firm. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Performance;
