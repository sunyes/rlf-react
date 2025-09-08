import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';

const faqs = [
  {
    questionKey: 'faq.what_is_tokenization',
    answerKey: 'faq.what_is_tokenization_answer',
  },
  {
    questionKey: 'faq.difference_from_real_stocks',
    answerKey: 'faq.difference_from_real_stocks_answer',
  },
  {
    questionKey: 'faq.is_it_safe',
    answerKey: 'faq.is_it_safe_answer',
  },
  {
    questionKey: 'faq.how_to_start_investing',
    answerKey: 'faq.how_to_start_investing_answer',
  },
  {
    questionKey: 'faq.need_crypto_knowledge',
    answerKey: 'faq.need_crypto_knowledge_answer',
  },
  {
    questionKey: 'faq.dividend_treatment',
    answerKey: 'faq.dividend_treatment_answer',
  },
];

export default function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
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
     <span className="text-lg font-bold">{t(faq.questionKey)}</span>
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
                       {t(faq.answerKey)}
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
  );
}