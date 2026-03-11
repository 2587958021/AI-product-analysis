'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Info,
  Layers,
  Monitor,
  Zap,
  Wallet,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Overview from './sections/Overview';
import Features from './sections/Features';
import UXAnalysis from './sections/UXAnalysis';
import Performance from './sections/Performance';
import Business from './sections/Business';
import MarketTrend from './sections/MarketTrend';

const tabs = [
  { id: 'overview', label: '产品概览', icon: Info, component: Overview },
  { id: 'features', label: '功能对比', icon: Layers, component: Features },
  { id: 'ux', label: '用户体验', icon: Monitor, component: UXAnalysis },
  { id: 'performance', label: '性能数据', icon: Zap, component: Performance },
  { id: 'business', label: '商业模式', icon: Wallet, component: Business },
  { id: 'market', label: '市场趋势', icon: TrendingUp, component: MarketTrend },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || Overview;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header with Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">国产AI产品分析报告</h1>
                <p className="text-xs text-gray-500">通义千问 · Kimi · 豆包 · DeepSeek</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto py-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                本报告基于公开资料整理，数据仅供参考
              </p>
              <p className="text-xs text-gray-400 mt-1">
                分析时间：2025年3月 · 数据来源：各产品官网及公开评测
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
