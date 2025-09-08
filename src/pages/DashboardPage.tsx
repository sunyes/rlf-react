import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/hooks/useLocale';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

// 模拟投资组合数据
const portfolioData = [
  { name: 'AAPL', value: 45, color: '#3b82f6' },
  { name: 'MSFT', value: 25, color: '#10b981' },
  { name: 'AMZN', value: 15, color: '#f59e0b' },
  { name: 'TSLA', value: 10, color: '#8b5cf6' },
  { name: '其他', value: 5, color: '#64748b' },
];

// 模拟收益数据
const performanceData = [
  { date: '1月', portfolio: 10000, benchmark: 10000 },
  { date: '2月', portfolio: 10500, benchmark: 10200 },
  { date: '3月', portfolio: 10300, benchmark: 10100 },
  { date: '4月', portfolio: 11200, benchmark: 10400 },
  { date: '5月', portfolio: 11800, benchmark: 10700 },
  { date: '6月', portfolio: 12500, benchmark: 11000 },
];

// 模拟最近交易
const recentTransactions = [
  { id: 1, name: 'AAPL', type: 'buy', amount: 5, price: 195.32, date: '2025-09-04' },
  { id: 2, name: 'TSLA', type: 'sell', amount: 2, price: 248.76, date: '2025-09-02' },
  { id: 3, name: 'MSFT', type: 'buy', amount: 3, price: 338.45, date: '2025-08-29' },
  { id: 4, name: 'AMZN', type: 'buy', amount: 1, price: 132.85, date: '2025-08-25' },
];

// 模拟市场动态
const marketNews = [
  { id: 1, title: '美联储维持利率不变，市场反应积极', change: '+1.2%', trend: 'up' },
  { id: 2, title: '苹果发布新款iPhone，股价创新高', change: '+3.5%', trend: 'up' },
  { id: 3, title: '特斯拉第三季度交付量低于预期', change: '-2.1%', trend: 'down' },
];

export default function DashboardPage() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 计算总资产和收益
  const totalValue = performanceData[performanceData.length - 1].portfolio;
  const totalReturn = ((totalValue - performanceData[0].portfolio) / performanceData[0].portfolio) * 100;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Header scrolled={scrolled} />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Defi 仪表板</h1>
              <p className="text-slate-600 dark:text-slate-300">欢迎回来！这是您的投资概览</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                <i className="fa-solid fa-download mr-2"></i>导出报告
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <i className="fa-solid fa-plus mr-2"></i>添加资产
              </button>
            </div>
          </div>
          
          {/* 资产概览卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">总资产价值</p>
                  <h3 className="text-3xl font-bold mt-1">${totalValue.toLocaleString()}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i className="fa-solid fa-wallet text-xl"></i>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-medium flex items-center">
                  <i className="fa-solid fa-arrow-up mr-1"></i>{totalReturn.toFixed(2)}%
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">相比上月</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">本月收益</p>
                  <h3 className="text-3xl font-bold mt-1">${(totalValue * 0.035).toFixed(2)}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <i className="fa-solid fa-chart-line text-xl"></i>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 font-medium flex items-center">
                  <i className="fa-solid fa-arrow-up mr-1"></i>3.5%
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">收益率</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">风险评分</p>
                  <h3 className="text-3xl font-bold mt-1">中等</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  <i className="fa-solid fa-shield-alt text-xl"></i>
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-4">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">多元化良好，可考虑增加债券配置</p>
            </motion.div>
          </div>
          
          {/* 图表区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">投资组合表现</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">1M</button>
                  <button className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">3M</button>
                  <button className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">1Y</button>
                  <button className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">全部</button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'light' ? '#f1f5f9' : '#1e293b'} />
                    <XAxis dataKey="date" stroke={theme === 'light' ? '#94a3b8' : '#94a3b8'} />
                    <YAxis stroke={theme === 'light' ? '#94a3b8' : '#94a3b8'} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: theme === 'light' ? 'white' : '#1e293b',
                        border: theme === 'light' ? '1px solid #e2e8f0' : '1px solid #334155',
                        borderRadius: '0.5rem',
                        boxShadow:'0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="portfolio" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorPortfolio)" 
                      strokeWidth={2}
                      name="您的投资组合"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="benchmark" 
                      stroke="#94a3b8" 
                      fillOpacity={0.3} 
                      fill="url(#colorBenchmark)" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="市场基准"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-bold mb-6">资产配置</h2>
              <div className="h-64 w-full max-w-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, '占比']}
                      contentStyle={{ 
                        backgroundColor: theme === 'light' ? 'white' : '#1e293b',
                        border: theme === 'light' ? '1px solid #e2e8f0' : '1px solid #334155',
                        borderRadius: '0.5rem',
                        boxShadow:'0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                {portfolioData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* 资产列表和市场动态 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-bold">资产明细</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-700/50">
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-500 dark:text-slate-400">资产</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-500 dark:text-slate-400">持仓数量</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-500 dark:text-slate-400">持仓成本</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-500 dark:text-slate-400">当前价格</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-500 dark:text-slate-400">收益</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-500 dark:text-slate-400">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {portfolioData.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div 
                              className="w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.name.substring(0, 2)}
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">股票代币</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {(item.value * 12).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${(item.value * 12 * (index % 2 === 0 ? 175 : 310)).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${(item.value * 12 * (index % 2 === 0 ? 195 : 338)).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-green-500 font-medium">
                            +{(Math.random() * 15 + 2).toFixed(2)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                              <i className="fa-solid fa-plus"></i>
                            </button>
                            <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400">
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <button className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                              <i className="fa-solid fa-ellipsis-v"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 text-center">
                <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  查看全部资产 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-bold">市场动态</h2>
              </div>
              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {marketNews.map((news, index) => (
                  <div key={index} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm mb-2">{news.title}</h3>
                      <span className={cn(
                        "text-sm font-medium px-2 py-0.5 rounded-full",
                        news.trend === 'up' 
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" 
                          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                      )}>
                        {news.change}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                      <span>今天 14:{(30 + index * 5) % 60}:{(10 + index * 12) % 60}</span>·
                      <span className="mx-2">市场</span>·
                      <button className="text-blue-600 dark:text-blue-400 hover:underline">阅读</button>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium text-sm mb-3">最近交易</h3>
                  {recentTransactions.slice(0, 3).map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center py-2 text-sm">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold ${
                          transaction.type === 'buy' ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                          <i className={`fa-solid fa-${transaction.type === 'buy' ? 'plus' : 'minus'}`}></i>
                        </div>
                        <div>
                          <div className="font-medium">{transaction.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{transaction.date}</div>
                        </div>
                      </div>
                      <div className={`font-medium ${transaction.type === 'buy' ? 'text-green-600' : 'text-red-600'} dark:text-green-400`}>
                        {transaction.type === 'buy' ? '+' : '-'}{transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 text-center">
                <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  查看全部市场资讯 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}