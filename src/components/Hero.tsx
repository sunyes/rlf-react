import { motion } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';

export default function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 rounded-l-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-600/5 rounded-tr-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-2">
              股票代币化平台
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t('hero.title').split('<br>')[0]}<br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t('hero.title').split('<br>')[1]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/how-it-works" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('hero.cta1')}
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <a 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium text-lg transition-all shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700"
              >
                {t('hero.cta2')}
                <i className="fa-solid fa-chart-line ml-2"></i>
              </a>
            </div>
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=user%20avatar%20${i}`} 
                    alt="User avatar" 
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} className="fa-solid fa-star text-sm"></i>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">来自5000+用户的信任</p>
              </div>
            </div>
          </motion.div>
          
           <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-700 hover:shadow-3xl">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=stock%20market%20digital%20token%20blockchain%20interface%20modern%20UI%20glass%20morphism%20design&sign=e36f0de3247725d0fb35c0802205af47" 
                alt="Stock tokenization platform dashboard" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium">实时市场数据</span>
                </div>
                <h3 className="text-2xl font-bold">全球股票代币市场</h3>
              </div>
            </div>
            
            {/* Decorative elements with animation */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute top-1/4 -right-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              initial={{ y: 20, opacity: 0 }}
               animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">全天候交易</div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-1/4 -left-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              initial={{ y: 20, opacity: 0 }}
               animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">+24%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">年度增长</div>
            </motion.div>
            
            {/* Floating card */}
            <div className="absolute -top-12 -left-12 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 w-48 border border-slate-200 dark:border-slate-700 animate-bounce-slow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">AAPL</span>
                <span className="text-sm font-medium text-green-500">+2.4%</span>
              </div>
              <div className="text-2xl font-bold mb-1">$195.32</div>
              <div className="h-12">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path 
                    d="M0,30 Q25,10 50,20 T100,5" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="2" 
                  />
                </svg>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 w-48 border border-slate-200 dark:border-slate-700 animate-pulse-slow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">总市值</span>
                <i className="fa-solid fa-info-circle text-slate-400"></i>
              </div>
              <div className="text-2xl font-bold mb-1">$2.45B</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">24小时交易量: $128.3M</div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider mb-8">受到全球领先机构的信任</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
            {['彭博社', '路透社', '金融时报', '华尔街日报', 'CoinDesk'].map((brand, i) => (
              <div key={i} className="text-2xl font-bold text-slate-400 dark:text-slate-500">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}