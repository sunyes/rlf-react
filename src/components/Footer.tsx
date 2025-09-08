import { motion } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <i className="fa-solid fa-link text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold text-white">RLinkFi</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              领先的股票代币化平台，让投资者能够以数字方式访问全球股票市场，实现无缝、安全和高效的交易体验。
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
            <div className="hidden md:block">
             <h4 className="text-white font-bold text-lg mb-4">{t('footer.products')}</h4>
             <ul className="space-y-3">
               {['代币化股票', '投资组合', '市场数据', 'API访问', '机构解决方案'].map((item) => (
                 <li key={item}>
                   <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                 </li>
               ))}
             </ul>
           </div>
          
           <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {[t('footer.about'), t('footer.team'), t('footer.news'), t('footer.careers'), t('footer.contact')].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
           <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              {[t('footer.help'), t('footer.learn'), t('footer.api'), t('footer.faq'), t('footer.terms')].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RLinkFi. 保留所有权利。
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">{t('footer.cookies')}</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">{t('footer.compliance')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}