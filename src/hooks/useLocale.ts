import { useState, useEffect, createContext, useContext } from 'react';
import zh from '@/locales/zh';
import en from '@/locales/en';
import { LocaleContext } from '@/contexts/localeContext';

type Locale = 'zh' | 'en';

export function useLocaleProvider() {
  const [locale, setLocale] = useState<Locale>('zh');
  
  useEffect(() => {
    // Load saved locale from localStorage if available
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['zh', 'en'].includes(savedLocale)) {
      setLocale(savedLocale);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLocale('en');
      } else {
        setLocale('zh');
      }
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);
  
  // Get translation function
  const t = (key: string): string => {
    const translations = locale === 'zh' ? zh : en;
    return translations[key] || key;
  };

  // 添加语言切换时的动画支持
  const changeLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    // 添加页面过渡动画类
    document.documentElement.classList.add('opacity-0');
    document.documentElement.style.transition = 'opacity 0.3s ease-in-out';
    
    setTimeout(() => {
      setLocale(newLocale);
      // 移除过渡动画类
      document.documentElement.classList.remove('opacity-0');
    }, 150);
  };
  
  return {
    locale,
    setLocale,
    t
  };
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}