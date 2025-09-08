import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/hooks/useLocale';

// 模拟新闻数据
const newsItems = [
  {
    id: 1,
    title: '全球股票代币化市场规模突破50亿美元',
    date: '2025-09-01',
    summary: '根据最新行业报告，全球股票代币化市场规模已突破50亿美元，较去年增长120%。',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=stock%20market%20growth%20financial%20news&sign=2349212b58c848ae0edb6de84c32a903',
    category: '市场动态'
  },
  {
    id: 2,
    title: 'SEC批准首个美股代币化ETF产品',
    date: '2025-08-28',
    summary: '美国证券交易委员会(SEC)正式批准了首个基于代币化股票的ETF产品，标志着监管机构对这一新兴领域的认可。',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=SEC%20building%20financial%20regulation&sign=66010a6307584785b09cff120c262c89',
    category: '监管新闻'
  },
  {
    id: 3,
    title: '亚洲最大银行推出代币化股票交易平台',
    date: '2025-08-25',
    summary: '亚洲某大型银行宣布推出面向机构投资者的代币化股票交易平台，初期将支持20只亚洲科技股的交易。',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=asian%20bank%20financial%20technology&sign=826586f0958a7d1b67217007c3884c35',
    category: '行业动态'
  },
  {
    id: 4,
    title: '我们平台新增10家欧洲公司股票代币',
    date: '2025-08-20',
    summary: '我们很高兴地宣布，平台现已新增10家欧洲领先企业的代币化股票，进一步丰富了用户的投资选择。',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=european%20stock%20market%20finance&sign=5c7b4ea1bc513618d06594f098bfa4f1',
    category: '平台公告'
  },
  {
    id: 5,
    title: '研究报告：代币化股票交易量年增长率达150%',
    date: '2025-08-15',
    summary: '知名研究机构发布报告显示，2024年代币化股票交易量达320亿美元，年增长率高达150%，预计2025年将突破800亿美元。',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=financial%20research%20report%20growth&sign=a7ecabe047641224dcf624325c0ee2f5',
    category: '市场分析'
  }
];

export default function NewsPage() {
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
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                最新资讯
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('news.title')}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {t('news.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                      {news.summary}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
                    >
                      {t('news.see_more')}
                      <i className="fa-solid fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}