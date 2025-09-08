import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { useLocale } from '@/hooks/useLocale';

export default function SignupPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useLocale();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (activeTab === 'signup') {
      if (!formData.name.trim()) {
        newErrors.name = '请输入您的姓名';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = '请确认密码';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = '密码不匹配';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.password) {
      newErrors.password = '请输入密码';
    } else if (formData.password.length < 8) {
      newErrors.password = '密码至少需要8个字符';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // For demo purposes, we'll just set authentication state
      setIsAuthenticated(true);
      
      // Redirect to home page
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Header scrolled={scrolled} />
      
      <main className="pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">{activeTab === 'signup' ? '创建账户' : '登录'}</h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {activeTab === 'signup' 
                    ? '加入我们的平台，开始您的股票代币化投资之旅' 
                    : '欢迎回来，请登录您的账户'}
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-slate-200 dark:border-slate-700">
                  <button
                    className={`flex-1 py-4 font-medium transition-colors ${
                      activeTab === 'signup' 
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                    onClick={() => setActiveTab('signup')}
                  >
                    注册
                  </button>
                  <button
                    className={`flex-1 py-4 font-medium transition-colors ${
                      activeTab === 'login' 
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                    onClick={() => setActiveTab('login')}
                  >
                    登录
                  </button>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  {activeTab === 'signup' && (
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        姓名
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400'
                        } focus:outline-none focus:ring-2 dark:bg-slate-700 dark:text-white`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400'
                      } focus:outline-none focus:ring-2 dark:bg-slate-700 dark:text-white`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      密码
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.password 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400'
                      } focus:outline-none focus:ring-2 dark:bg-slate-700 dark:text-white`}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                    )}
                  </div>
                  
                  {activeTab === 'signup' && (
                    <div className="mb-6">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        确认密码
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.confirmPassword 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400'
                        } focus:outline-none focus:ring-2 dark:bg-slate-700 dark:text-white`}
                      />
                      {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                      )}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    {activeTab === 'signup' ? '创建账户' : '登录'}
                  </button>
                  
                  {activeTab === 'login' && (
                    <div className="mt-4 text-center">
                      <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        忘记密码？
                      </a>
                    </div>
                  )}
                </form>
              </div>
              
              <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                {activeTab === 'signup' 
                  ? '已有账户？ ' 
                  : '没有账户？ '}
                <button
                  onClick={() => setActiveTab(activeTab === 'signup' ? 'login' : 'signup')}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  {activeTab === 'signup' ? '登录' : '注册'}
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}