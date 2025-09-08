import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/hooks/useLocale';

export default function IssuancePage() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { t } = useLocale();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Header scrolled={scrolled} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px] opacity-50"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t('issuance.hero.title')}</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                {t('issuance.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#process" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-700 hover:bg-blue-50 font-medium text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  了解发行流程
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium text-lg transition-all"
                >
                  联系专家顾问
                  <i className="fa-solid fa-user-tie ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                {t('issuance.features.title')}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('issuance.title')}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {t('issuance.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fa-solid fa-gavel text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('issuance.features.compliance')}</h3>
                <p className="text-slate-600 dark:text-slate-300">{t('issuance.features.compliance_desc')}</p>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fa-solid fa-bolt text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('issuance.features.efficiency')}</h3>
                <p className="text-slate-600 dark:text-slate-300">{t('issuance.features.efficiency_desc')}</p>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fa-solid fa-eye text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('issuance.features.transparency')}</h3>
                <p className="text-slate-600 dark:text-slate-300">{t('issuance.features.transparency_desc')}</p>
              </motion.div>
              
              {/* Feature 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fa-solid fa-exchange text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('issuance.features.liquidity')}</h3>
                <p className="text-slate-600 dark:text-slate-300">{t('issuance.features.liquidity_desc')}</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                {t('issuance.process.title')}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">资产上链发行流程</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                我们提供端到端的资产上链发行服务，从资产评估到链上流通，全程专业团队支持
              </p>
            </div>
            
            <div className="relative">
              {/* 连接线 - 仅在中等屏幕及以上显示 */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 dark:bg-blue-800 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg z-10">
                    <span className="font-bold">01</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 w-full">
                    <h3 className="text-xl font-bold mb-3">{t('issuance.process.step1')}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{t('issuance.process.step1_desc')}</p>
                  </div>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg z-10">
                    <span className="font-bold">02</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 w-full">
                    <h3 className="text-xl font-bold mb-3">{t('issuance.process.step2')}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{t('issuance.process.step2_desc')}</p>
                  </div>
                </motion.div>
                
                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg z-10">
                    <span className="font-bold">03</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 w-full">
                    <h3 className="text-xl font-bold mb-3">{t('issuance.process.step3')}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{t('issuance.process.step3_desc')}</p>
                  </div>
                </motion.div>
                
                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg z-10">
                    <span className="font-bold">04</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 w-full">
                    <h3 className="text-xl font-bold mb-3">{t('issuance.process.step4')}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{t('issuance.process.step4_desc')}</p>
                  </div>
                </motion.div>
                
                {/* Step 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg z-10">
                    <span className="font-bold">05</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 w-full">
                    <h3 className="text-xl font-bold mb-3">{t('issuance.process.step5')}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{t('issuance.process.step5_desc')}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                {t('issuance.faq.title')}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">常见问题解答</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                我们收集了资产发行过程中最常见的问题，如果您有其他疑问，请随时联系我们的专家团队
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(0)}
                    >
                      <span className="text-lg font-bold">{t('issuance.faq.q1')}</span>
                      <i className={`fa-solid ${openFaqIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-600 dark:text-blue-400 transition-transform`}></i>
                    </button>
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ 
                        maxHeight: openFaqIndex === 0 ? '500px' : 0, 
                        opacity: openFaqIndex === 0 ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 overflow-hidden"
                    >
                      <div className="pb-5 pt-0 text-slate-600 dark:text-slate-300">
                        {t('issuance.faq.a1')}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(1)}
                    >
                      <span className="text-lg font-bold">{t('issuance.faq.q2')}</span>
                      <i className={`fa-solid ${openFaqIndex === 1 ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-600 dark:text-blue-400 transition-transform`}></i>
                    </button>
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ 
                        maxHeight: openFaqIndex === 1 ? '500px' : 0, 
                        opacity: openFaqIndex === 1 ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 overflow-hidden"
                    >
                      <div className="pb-5 pt-0 text-slate-600 dark:text-slate-300">
                        {t('issuance.faq.a2')}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(2)}
                    >
                      <span className="text-lg font-bold">{t('issuance.faq.q3')}</span>
                      <i className={`fa-solid ${openFaqIndex === 2 ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-600 dark:text-blue-400 transition-transform`}></i>
                    </button>
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ 
                        maxHeight: openFaqIndex === 2 ? '500px' : 0, 
                        opacity: openFaqIndex === 2 ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 overflow-hidden"
                    >
                      <div className="pb-5 pt-0 text-slate-600 dark:text-slate-300">
                        {t('issuance.faq.a3')}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(3)}
                    >
                      <span className="text-lg font-bold">{t('issuance.faq.q4')}</span>
                      <i className={`fa-solid ${openFaqIndex === 3 ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-600 dark:text-blue-400 transition-transform`}></i>
                    </button>
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ 
                        maxHeight: openFaqIndex === 3 ? '500px' : 0, 
                        opacity: openFaqIndex === 3 ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 overflow-hidden"
                    >
                      <div className="pb-5 pt-0 text-slate-600 dark:text-slate-300">
                        {t('issuance.faq.a4')}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl mx-4 my-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">准备好开始您的资产上链之旅了吗？</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-lg">
                  联系我们的专家团队，获取免费的资产发行评估和定制化解决方案，开启实体资产数字化的新篇章。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:issuance@example.com" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-700 hover:bg-blue-50 font-medium text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    发送咨询邮件
                    <i className="fa-solid fa-envelope ml-2"></i>
                  </a>
                  <a 
                    href="tel:+861234567890" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium text-lg transition-all"
                  >
                    电话咨询专家
                    <i className="fa-solid fa-phone ml-2"></i>
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=financial%20experts%20meeting%20discussion%20modern%20office&sign=5ff647c8ac66065de03411d8623e6832" 
                  alt="Financial experts discussing asset issuance" 
                  className="w-full h-auto rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 max-w-xs transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-yellow-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <span className="font-medium">5.0</span>
                  </div>
                  <p className="text-sm italic text-slate-600 dark:text-slate-300">
                    "通过这个平台，我们成功将价值2亿元的房地产资产上链发行，整个过程合规高效，团队专业度令人印象深刻。"
                  </p>
                  <div className="mt-4 font-medium">— 某知名房地产开发商</div>
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