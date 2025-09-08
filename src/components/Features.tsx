import { motion } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';


const features = [
  {
    icon: 'fa-globe',
    titleKey: 'features.global_access',
    descriptionKey: 'features.global_access_desc',
  },
  {
    icon: 'fa-clock',
    titleKey: 'features.24h_trading',
    descriptionKey: 'features.24h_trading_desc',
  },
  {
    icon: 'fa-pie-chart',
    titleKey: 'features.fractional',
    descriptionKey: 'features.fractional_desc',
  },
  {
    icon: 'fa-shield-alt',
    titleKey: 'features.security',
    descriptionKey: 'features.security_desc',
  },
  {
    icon: 'fa-bolt',
    titleKey: 'features.settlement',
    descriptionKey: 'features.settlement_desc',
  },
  {
    icon: 'fa-chart-line',
    titleKey: 'features.analysis',
    descriptionKey: 'features.analysis_desc',
  },
];

export default function Features() {
  const { t } = useLocale();
  return (
    <section id="features" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              核心优势
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('features.title')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t('features.subtitle')}
          </p>
        </div>
        
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:-translate-y-2 group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-all duration-700"></div>
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                <i className={`fa-solid ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{t(feature.titleKey)}</h3>
              <p className="text-slate-600 dark:text-slate-300 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">{t(feature.descriptionKey)}</p>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href="#" className="text-blue-600 dark:text-blue-400 inline-flex items-center text-sm font-medium">
                  了解更多 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">加入不断增长的投资者社区</h3>
              <p className="text-blue-100 text-lg mb-8">
                全球已有超过10,000名投资者通过我们的平台投资代币化股票，管理着超过2亿美元的资产。
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">10K+</div>
                  <p className="text-blue-100">活跃投资者</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">$200M+</div>
                  <p className="text-blue-100">管理资产</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">200+</div>
                  <p className="text-blue-100">代币化股票</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                  <p className="text-blue-100">系统正常运行时间</p>
                </div>
              </div>
              <a 
                href="#signup" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-blue-50 font-medium text-lg transition-all shadow-lg hover:shadow-xl w-fit"
              >
                立即开始投资
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="relative h-64 md:h-auto min-h-[400px]">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=financial%20trading%20platform%20dashboard%20interface%20modern%20UI%20data%20visualization&sign=99b58ba65e8ab65a43fee32b5dc6ba79" 
                alt="Stock trading platform dashboard" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}