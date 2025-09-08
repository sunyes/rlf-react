import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import HowItWorks from '@/components/HowItWorks';
import MarketData from '@/components/MarketData';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

// 模拟市场数据
const marketData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1900 },
  { name: 'Mar', value: 1500 },
  { name: 'Apr', value: 2800 },
  { name: 'May', value: 2200 },
  { name: 'Jun', value: 3500 },
  { name: 'Jul', value: 3200 },
  { name: 'Aug', value: 4100 },
  { name: 'Sep', value: 3800 },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  
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
      <main>
        <Hero />
        <Features />
        <Products />
        <HowItWorks />
        <MarketData data={marketData} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}