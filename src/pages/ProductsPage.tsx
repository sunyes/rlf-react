import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';
import SupportedTokens from '@/components/SupportedTokens';

// 模拟产品数据
const products = [
  {
    id: 1,
    name: 'Lianhe Sowell  Inc.',
    ticker: 'LHSW',
    price: 2.32,
    change: 2.4,
    changeDirection: 'up',
    description: "The world's leading provider of machine vision and artificial intelligence solutions, in collaboration with Sowell International Holdings Limited (NASDAQ: LHSW), has officially landed on the NASDAQ Capital Market,",
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Apple%20Inc%20logo%20company%20building&sign=ad6eeeb0b6ab0693972707b0c2697435',
    historicalData: [
      { date: 'Jan', price: 150 },
      { date: 'Feb', price: 165 },
      { date: 'Mar', price: 160 },
      { date: 'Apr', price: 175 },
      { date: 'May', price: 185 },
      { date: 'Jun', price: 195 },
    ],
    marketCap: '1.2M',
    volume: '0.52M',
  },
  {
    id: 2,
    name: 'Microsoft Corporation',
    ticker: 'MSFT',
    price: 338.45,
    change: 1.2,
    changeDirection: 'up',
    description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Microsoft%20Corporation%20logo%20building&sign=82cc0a000d5d32f8c204305318c92570',
    historicalData: [
      { date: 'Jan', price: 300 },
      { date: 'Feb', price: 310 },
      { date: 'Mar', price: 305 },
      { date: 'Apr', price: 320 },
      { date: 'May', price: 330 },
      { date: 'Jun', price: 338 },
    ],
    marketCap: '2.45T',
    volume: '28.7M',
  },
  {
    id: 3,
    name: 'Amazon.com Inc.',
    ticker: 'AMZN',
    price: 132.85,
    change: -0.8,
    changeDirection: 'down',
    description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally.',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Amazon%20logo%20company%20building&sign=6ddd858c6deba6a009a6c04013f85a9e',
    historicalData: [
      { date: 'Jan', price: 135 },
      { date: 'Feb', price: 140 },
      { date: 'Mar', price: 138 },
      { date: 'Apr', price: 132 },
      { date: 'May', price: 135 },
      { date: 'Jun', price: 133 },
    ],
    marketCap: '1.32T',
    volume: '48.9M',
  },
  {
    id: 4,
    name: 'Tesla Inc.',
    ticker: 'TSLA',
    price: 248.76,
    change: 5.7,
    changeDirection: 'up',
    description: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally.',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Tesla%20Inc%20logo%20factory&sign=04025d4bf4fc71477bddff26b34d8eec',
    historicalData: [
      { date: 'Jan', price: 180 },
      { date: 'Feb', price: 200 },
      { date: 'Mar', price: 190 },
      { date: 'Apr', price: 210 },
      { date: 'May', price: 230 },
      { date: 'Jun', price: 249 },
    ],
    marketCap: '782.6B',
    volume: '120.5M',
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Header scrolled={scrolled} />
      
      <main className="pt-24 pb-16">
        <section id="products" className="py-20 md:py-32 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                代币化股票
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('products.title')}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {t('products.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* 产品列表 */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="p-4 bg-slate-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
                    <h3 className="font-bold text-lg">可用产品</h3>
                  </div>
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {products.map((product) => (
                      <div 
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedProduct.id === product.id 
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600' 
                            : 'hover:bg-slate-100 dark:hover:bg-slate-700/50'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-bold">{product.ticker}</div>
                          <div className={`font-bold ${
                            product.changeDirection === 'up' ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {product.changeDirection === 'up' ? '+' : ''}{product.change}%
                          </div>
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">{product.name}</div>
                        <div className="font-medium mt-1">${product.price.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 产品详情 */}
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="w-full h-full object-cover rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold">{selectedProduct.name}</h3>
                          <div className="text-slate-500 dark:text-slate-400">{selectedProduct.ticker}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl md:text-4xl font-bold">${selectedProduct.price.toFixed(2)}</div>
                          <div className={`text-xl ${
                            selectedProduct.changeDirection === 'up' ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {selectedProduct.changeDirection === 'up' ? '+' : ''}{selectedProduct.change}%
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {selectedProduct.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl">
                          <div className="text-sm text-slate-500 dark:text-slate-400">市值</div>
                          <div className="font-bold">{selectedProduct.marketCap}</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl">
                          <div className="text-sm text-slate-500 dark:text-slate-400">24h交易量</div>
                          <div className="font-bold">{selectedProduct.volume}</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl">
                          <div className="text-sm text-slate-500 dark:text-slate-400">代币类型</div>
                          <div className="font-bold">ERC-20</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                      <a href="http://defi.rlink.fi/subscription" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                        立即购买
                      </a>
                        <button className="px-6 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors border border-slate-200 dark:border-slate-600">
                          加入观察列表
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 历史价格图表 */}
                  <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="text-xl font-bold mb-4">历史价格走势</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={selectedProduct.historicalData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="date" stroke="#94a3b8" />
                          <YAxis stroke="#94a3b8" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              border: '1px solid #e2e8f0',
                              borderRadius: '0.5rem',
                              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#3b82f6" 
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </section>
         
         {/* 支持的代币部分 */}
         <SupportedTokens />
       </main>
       
       <Footer />
     </div>
   );
 }