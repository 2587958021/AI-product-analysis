'use client';

import { motion } from 'framer-motion';
import { products, uxLabels } from '../data/products';
import ReactECharts from 'echarts-for-react';
import { Layout, MousePointer, Zap, Smartphone, Eye } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const productColors: Record<string, string> = {
  qianwen: '#f97316',
  kimi: '#3b82f6',
  doubao: '#10b981',
  deepseek: '#8b5cf6',
};

const uxIcons: Record<string, React.ReactNode> = {
  interfaceDesign: <Layout className="w-5 h-5" />,
  interactionFlow: <MousePointer className="w-5 h-5" />,
  responseSpeed: <Zap className="w-5 h-5" />,
  mobileExperience: <Smartphone className="w-5 h-5" />,
  accessibility: <Eye className="w-5 h-5" />,
};

export default function UXAnalysis() {
  const chartOption = {
    color: Object.values(productColors),
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: {
        color: '#374151',
      },
    },
    legend: {
      top: 0,
      icon: 'circle',
      itemGap: 15,
      textStyle: {
        color: '#6b7280',
        fontSize: 12,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: Object.values(uxLabels),
      axisLine: {
        lineStyle: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
      },
      axisLabel: {
        color: '#6b7280',
        fontSize: 11,
        interval: 0,
      },
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#6b7280',
        fontSize: 11,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(156, 163, 175, 0.2)',
          type: 'dashed',
        },
      },
    },
    series: products.map((product) => ({
      name: product.name,
      type: 'bar',
      data: Object.keys(uxLabels).map((key) => product.ux[key as keyof typeof product.ux]),
      barWidth: '15%',
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
      emphasis: {
        focus: 'series',
      },
    })),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">用户体验分析</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          从界面设计、交互流程、响应速度、移动体验、可访问性五个维度评估用户体验
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">用户体验评分对比</h3>
        <ReactECharts
          option={chartOption}
          style={{ height: '400px', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(uxLabels).map(([key, label]) => (
          <motion.div
            key={key}
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                {uxIcons[key]}
              </div>
              <h3 className="font-semibold text-gray-900">{label}</h3>
            </div>
            <div className="space-y-3">
              {products
                .sort(
                  (a, b) =>
                    b.ux[key as keyof typeof b.ux] - a.ux[key as keyof typeof a.ux]
                )
                .map((product) => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 relative">
                        <Image
                          src={product.logo}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-700">{product.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${product.ux[key as keyof typeof product.ux]}%`,
                            backgroundColor: productColors[product.id],
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-8">
                        {product.ux[key as keyof typeof product.ux]}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">UX 分析洞察</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">优势产品</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">豆包</span>
                响应速度最快(90分)，移动端体验优秀(92分)，交互流程流畅
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">Kimi</span>
                界面设计最优雅(92分)，交互流程清晰(90分)，整体体验一致性好
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">改进空间</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">DeepSeek</span>
                界面设计相对简单(82分)，移动端体验有待提升(80分)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">通义千问</span>
                移动端体验一般(84分)，可访问性有提升空间
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
