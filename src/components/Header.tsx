import { useState, useContext, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { LocaleContext } from "@/contexts/localeContext";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
    label: string;
    path: string;
    isExternal?: boolean;
}

interface HeaderProps {
    scrolled: boolean;
}

export default function Header(
    {
        scrolled
    }: HeaderProps
) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("");
    const location = useLocation();

    const {
        theme,
        toggleTheme
    } = useTheme();

    const {
        locale,
        setLocale
    } = useContext(LocaleContext);

  const navItems: NavItem[] = [{
    label: "特性",
    path: "/features"
  }, {
    label: "产品",
    path: "/products"
  }, {
    label: "发行",
    path: "/issuance"
  }, {
    label: "如何开始",
    path: "/how-it-works"
  }, {
    label: "市场数据",
    path: "/market"
  }, {
    label: "常见问题",
    path: "/faq"
  }, {
    label: "新闻",
    path: "/news"
  }];

    useEffect(() => {
        setActivePath(location.pathname);
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <header
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2 group">
                            <div
                                className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center transition-transform group-hover:scale-110">
                                <i className="fa-solid fa-link text-white text-xl"></i>
                            </div>
                            <span
                                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                                style={{
                                    fontSize: "26px"
                                }}>RLinkFi
                                                                                            </span>
                        </a>
                    </div>
                    {}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
              activePath === item.path ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
                    {}
                    <div className="flex items-center space-x-3">
                        {}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}>
                            {theme === "light" ? <i className="fa-solid fa-moon text-xl transition-transform hover:rotate-12"></i> : <i className="fa-solid fa-sun text-xl transition-transform hover:rotate-12"></i>}
                        </button>
                        {}
                        <button
                            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 hidden md:flex items-center justify-center w-12 h-12 shadow-sm hover:shadow"
                            aria-label="切换语言">
                            <span className="font-medium">{locale === "zh" ? "EN" : "中文"}</span>
                            <i className={`fa-solid fa-language ml-1 transition-transform duration-300 ${locale === "en" ? 'rotate-180' : ''}`}></i>
                        </button>
                        {}
        <Link
          to="/dashboard"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Defi 仪表板
                          <i className="fa-solid fa-chart-pie ml-2 text-sm"></i>
        </Link>
                        {}
                        <button
                            className="md:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}>
                            {mobileMenuOpen ? <i className="fa-solid fa-times text-xl"></i> : <i className="fa-solid fa-bars text-xl"></i>}
                        </button>
                    </div>
                </div>
            </div>
            {}
            {/* Mobile menu with overlay */}
            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div 
                        className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-hidden="true"
                    ></div>
                    
                    {/* Mobile menu */}
                    <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-slate-800 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
                        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <i className="fa-solid fa-link text-white text-sm"></i>
                                </div>
                                <span className="font-bold">RLinkFi</span>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                aria-label="关闭菜单"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        
                        <div className="p-4">
                            <div className="space-y-1">
                                {navItems.map(item => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          "flex items-center py-3 px-4 rounded-lg text-base font-medium transition-colors",
                          activePath === item.path 
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" 
                            : "hover:bg-slate-100 dark:hover:bg-slate-700"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <i className="fa-solid fa-angle-right mr-3 text-slate-400"></i>
                        {item.label}
                      </Link>
                                ))}
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex justify-between items-center mb-4">
                                    <button
                                        onClick={toggleTheme}
                                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors w-full justify-start"
                                        aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}
                                    >
                                        {theme === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                                        <span>{theme === "light" ? "深色模式" : "浅色模式"}</span>
                                    </button>
                                </div>
                                
                                <div className="flex justify-between items-center mb-6">
                                    <button
                                        onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
                                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors w-full justify-start"
                                        aria-label="切换语言"
                                    >
                                        <i className="fa-solid fa-language"></i>
                                        <span>{locale === "zh" ? "切换到英文" : "切换到中文"}</span>
                                    </button>
                                </div>
                                
                      <Link
                        to="/dashboard"
                        className="inline-flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Defi 仪表板
                        <i className="fa-solid fa-chart-pie ml-2 text-sm"></i>
                      </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}