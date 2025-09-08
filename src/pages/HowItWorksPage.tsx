import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';

const steps = [
  {
    titleKey: 'howitworks.step1.title',
    descriptionKey: 'howitworks.step1.desc',
    icon: 'fa-user-plus',
    number: '01',
  },
  {
    titleKey: 'howitworks.step2.title',
    descriptionKey: 'howitworks.step2.desc',
    icon: 'fa-wallet',
    number: '02',
  },
  {
    titleKey: 'howitworks.step3.title',
    descriptionKey: 'howitworks.step3.desc',
    icon: 'fa-search',
    number: '03',
  },
  {
    titleKey: 'howitworks.step4.title',
    descriptionKey: 'howitworks.step4.desc',
    icon: 'fa-exchange-alt',
    number: '04',
  },
];

export default function HowItWorksPage() {
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
        <section id="how-it-works" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
 如何开始
              </div>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">如何开始</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {t('howitworks.subtitle')}
              </p>
            </div>
            
            <div className="relative">
              {/* 连接线 - 仅在中等屏幕及以上显示 */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 dark:bg-blue-800 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl md:text-3xl mb-6 shadow-lg z-10">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 w-full">
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">{step.number}</div>
                      <h3 className="text-xl font-bold mb-3">{t(step.titleKey)}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{t(step.descriptionKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">准备好开始您的投资之旅了吗？</h3>
                  <p className="text-indigo-100 text-lg mb-8 max-w-lg">
                    加入我们的平台，体验股票代币化带来的革命性投资体验，无需高额最低投资，无需复杂的开户流程。
                  </p>
                  <a 
                    href="http://defi.rlink.fi/" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-indigo-700 hover:bg-indigo-50 font-medium text-lg transition-all shadow-lg hover:shadow-xl w-fit"
                  >
                    立即开始
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
                <div className="md:col-span-2 relative hidden md:block">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=investment%20journey%20financial%20growth%20chart&sign=29456a38ec8a86f6dbd7847b7fa790b2" 
                    alt="Investment journey" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}