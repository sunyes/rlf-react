import { motion } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';

export default function SupportedTokens() {
  const { t } = useLocale();
  
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px] opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">支持的代币</h2>
          <p className="text-lg text-slate-400">
            跟踪债券、股票或 ETF 等 RWA 价值的可组合代币化证券。为去中心化金融应用的新时代提供动力。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 左侧渐变卡片 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">专为去中心化而打造</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-cube text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">可自由转让的 ERC-20 代币</h4>
                  <p className="text-blue-100/80">在任何支持 ERC-20 标准的钱包和交易所间无缝转移</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-link text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">可与 DeFi 协议组合</h4>
                  <p className="text-blue-100/80">融入现有 DeFi 生态系统，支持借贷、质押等操作</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-link text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">多链支持</h4>
                  <p className="text-blue-100/80">跨链互操作性，支持主流区块链网络</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* 右侧白色卡片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white text-slate-900 rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">真实价值</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-slate-100 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-shield text-slate-800 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">每个代币由标的资产 1:1 支持</h4>
                  <p className="text-slate-600">完全由实际资产背书，确保价值稳定</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-slate-100 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-building-columns text-slate-800 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">第三方持牌托管人持有相关资产</h4>
                  <p className="text-slate-600">资产由受监管的金融机构安全托管</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-slate-100 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-hand-holding-dollar text-slate-800 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">可赎回标的资产的现金价值</h4>
                  <p className="text-slate-600">随时可按当前市场价值赎回 underlying 资产</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}