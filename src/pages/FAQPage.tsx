import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';

const faqs = [
  {
    question: '什么是股票代币化？',
    answer: '股票代币化是将传统股票转换为基于区块链的数字资产的过程。这些代币代表对 underlying 股票的部分权益。与传统股票相比，代币化股票提供了更高的流动性、24/7交易和全球可访问性。',
  },
  {
    question: '代币化股票与实际股票有什么区别？',
    answer: '代币化股票和实际股票在所有权和价值上基本相同，都代表对公司的部分所有权。主要区别在于交易基础设施：代币化股票基于区块链技术，提供更快的结算时间、更低的交易费用和全天候交易。此外，代币化股票可以实现碎片化所有权，让投资者以更低的门槛进入市场。',
  },
  {
    question: '投资代币化股票安全吗？',answer: '是的，我们平台上的所有代币化股票及代码都受到严格的三方审计，并通过多重安全措施保护用户资产。我们采用银行级别的加密技术、冷存储和定期安全审计，确保您的投资安全。此外，所有代币化股票都由实际股票1:1支持，并由SPV持牌机构托管。',
  },
  {
    question: '如何开始投资代币化股票？',
    answer: '开始投资代币化股票非常简单：1) 在我们Defi仪表板上连接钱包签名验证账户；2) 存入资金（通过加密货币稳定币）；3) 浏览可用的代币化股票；4) 选择您想投资的股票并下单。整个过程通常只需几分钟即可完成。',
  },
  {
    question: '是否需要有加密货币知识才能投资？',
    answer: '是的需要。但我们的平台设计为对加密货币新手友好，您可以使用任何支持WEB3协议的钱包进行投资。我们处理所有底层技术复杂性，为您提供类似于传统股票交易平台的熟悉体验。',
  },
  {
    question: '零售市场参与者在哪里能买到？',
    answer: '零售市场参与者可以通过受监管的交易所购买 rToken，也可通过 DEX 点对点购买。有关促进点对点交换的流动性池列表，请参阅我们的 DeFi仪表板。',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Header scrolled={scrolled} />
      
      <main className="pt-24 pb-16">
        <section id="faq" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                常见问题
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('faq.title')}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {t('faq.subtitle')}
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                      <button
                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="text-lg font-bold">{faq.question}</span>
                        <i className={`fa-solid ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-600 dark:text-blue-400 transition-transform`}></i>
                      </button>
                      <motion.div
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ 
                          maxHeight: openIndex === index ? '500px' : 0, 
                          opacity: openIndex === index ? 1 : 0 
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="px-6 overflow-hidden"
                      >
                        <div className="pb-5 pt-0 text-slate-600 dark:text-slate-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                      {index < faqs.length - 1 && (
                        <div className="border-t border-slate-200 dark:border-slate-700"></div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">还有其他问题？我们的专家团队随时为您提供帮助</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  联系客服
                  <i className="fa-solid fa-envelope ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}