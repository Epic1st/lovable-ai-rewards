
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const ROICalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [days, setDays] = useState(20);
  const [chartData, setChartData] = useState<Array<{ day: number; balance: number }>>([]);
  
  useEffect(() => {
    calculateROI();
  }, [initialInvestment, days]);
  
  const calculateROI = () => {
    const data = [];
    let balance = initialInvestment;
    
    // Add starting point (day 0)
    data.push({
      day: 0,
      balance: parseFloat(balance.toFixed(2))
    });
    
    // Calculate for each day
    for (let day = 1; day <= days; day++) {
      // Apply 2% daily return only for trading days (5 days per week)
      if (day % 7 !== 0 && day % 7 !== 6) { // Skip weekends (day 6 and 7)
        balance = balance * 1.02;
      }
      
      // Add data point for every 5 days or the final day
      if (day % 5 === 0 || day === days) {
        data.push({
          day: day,
          balance: parseFloat(balance.toFixed(2))
        });
      }
    }
    
    setChartData(data);
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };
  
  const calculateTotalROI = () => {
    if (chartData.length < 2) return 0;
    const initial = chartData[0].balance;
    const final = chartData[chartData.length - 1].balance;
    return ((final - initial) / initial * 100).toFixed(2);
  };
  
  // Example data for the static table
  const exampleData = [
    { day: 0, balance: 1000 },
    { day: 5, balance: 1104 },
    { day: 10, balance: 1219 },
    { day: 15, balance: 1345 },
    { day: 20, balance: 1482 }
  ];
  
  return (
    <section className="py-24 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('./assets/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">ROI Calculator</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            See how your investment can grow with our 2% daily returns, compounding over 5 trading days per week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Interactive Calculator */}
          <div className="glass-morphism rounded-lg p-6" data-aos="fade-right">
            <h3 className="text-xl font-bold mb-6">Try Your Own Projection</h3>
            
            <div className="mb-8 space-y-6">
              <div>
                <label htmlFor="investment" className="block text-sm font-medium text-gray-400 mb-2">
                  Initial Investment
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                  <Input
                    id="investment"
                    type="number"
                    min="100"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="pl-8"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="days" className="block text-sm font-medium text-gray-400 mb-2">
                  Number of Days (Max 30)
                </label>
                <Input
                  id="days"
                  type="number"
                  min="5"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                />
              </div>
              
              <Button onClick={calculateROI} className="w-full">
                Calculate
              </Button>
            </div>
            
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis 
                    dataKey="day"
                    label={{ value: 'Days', position: 'insideBottom', offset: -5 }}
                    tick={{ fill: '#ccc' }}
                  />
                  <YAxis 
                    tickFormatter={(value) => `$${value}`}
                    tick={{ fill: '#ccc' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Balance']}
                    contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="balance" 
                    name="Balance"
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#8B5CF6' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {chartData.length > 0 && (
              <div className="mt-4 text-center">
                <p className="text-lg">
                  Your investment of <span className="text-primary font-bold">{formatCurrency(initialInvestment)}</span> could 
                  grow to <span className="text-primary font-bold">{formatCurrency(chartData[chartData.length - 1]?.balance)}</span> in {days} days
                </p>
                <p className="text-gray-400">
                  Total Return: <span className="text-white font-bold">{calculateTotalROI()}%</span>
                </p>
              </div>
            )}
          </div>
          
          {/* Static Example */}
          <div className="glass-morphism rounded-lg p-6" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-6">Example $1,000 Investment</h3>
            
            <Card className="bg-secondary/30 border-gray-700">
              <CardHeader>
                <CardTitle>Growth Over 20 Trading Days</CardTitle>
                <CardDescription>
                  Formula: Balance₍ₙ₎ = Balance₍₀₎ × (1.02)ⁿ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-3 px-4 text-left">Day</th>
                        <th className="py-3 px-4 text-left">Balance</th>
                        <th className="py-3 px-4 text-left">Gain</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exampleData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800">
                          <td className="py-3 px-4">{row.day}</td>
                          <td className="py-3 px-4">${row.balance}</td>
                          <td className="py-3 px-4">
                            {index > 0 ? (
                              <span className="text-green-500">
                                +${(row.balance - exampleData[index - 1].balance).toFixed(2)}
                              </span>
                            ) : (
                              '-'
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-700 pt-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-400">Monthly ROI</p>
                  <p className="text-xl font-bold">48.2%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Annual ROI (compounded)</p>
                  <p className="text-xl font-bold">~3,750%</p>
                </div>
              </CardFooter>
            </Card>
            
            <div className="mt-8 bg-secondary/30 p-4 rounded-lg border border-gray-700">
              <h4 className="font-bold mb-2">Important Notes:</h4>
              <ul className="text-gray-400 space-y-2 list-disc pl-5">
                <li>Trading occurs on 5 days per week (Monday-Friday)</li>
                <li>No returns are calculated on weekends</li>
                <li>2% daily returns are reinvested automatically for maximum growth</li>
                <li>You can withdraw earnings at any time</li>
                <li>Past performance is not indicative of future results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
