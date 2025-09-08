import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import FeaturesPage from "@/pages/FeaturesPage";
import ProductsPage from "@/pages/ProductsPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import MarketDataPage from "@/pages/MarketDataPage";
import FAQPage from "@/pages/FAQPage";
import SignupPage from "@/pages/SignupPage";
import NewsPage from "@/pages/NewsPage";
import IssuancePage from "@/pages/IssuancePage";
import DashboardPage from '@/pages/DashboardPage';
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { LocaleContext } from '@/contexts/localeContext';
import { useLocaleProvider } from '@/hooks/useLocale';

// 路由配置数组
const routes = [
  { path: "/", element: <Home />, isPublic: true },
  { path: "/features", element: <FeaturesPage />, isPublic: true },
  { path: "/products", element: <ProductsPage />, isPublic: true },
  { path: "/how-it-works", element: <HowItWorksPage />, isPublic: true },
  { path: "/market", element: <MarketDataPage />, isPublic: true },
  { path: "/faq", element: <FAQPage />, isPublic: true },
  { path: "/news", element: <NewsPage />, isPublic: true },
  { path: "/issuance", element: <IssuancePage />, isPublic: true },
  { path: "/signup", element: <SignupPage />, isPublic: true },
  { path: "/dashboard", element: <DashboardPage />, isPublic: false },
  { path: "*", element: <Navigate to="/" />, isPublic: true }, // 404 重定向到首页
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const localeContext = useLocaleProvider();

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
     <AuthContext.Provider
       value={{ isAuthenticated, setIsAuthenticated, logout }}
     >
       <LocaleContext.Provider value={localeContext}>
         <Routes>
           {routes.map((route, index) => (
             <Route 
               key={index} 
               path={route.path} 
               element={
                 route.isPublic || isAuthenticated 
                   ? route.element 
                   : <Navigate to="/signup" />
               } 
             />
           ))}
         </Routes>
       </LocaleContext.Provider>
     </AuthContext.Provider>
  );
}
