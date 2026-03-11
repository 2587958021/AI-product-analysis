'use client';

import { motion } from 'framer-motion';
import { products } from '../data/products';
import ReactECharts from 'echarts-for-react';
import { Clock, Database, Target, Shield, TrendingUp } from 'lucide-react';
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

export default function Performance() {
  // 响应时间柱状图配置
  const responseTimeOption = {
    color: Object.values(productColors),
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: { color: '#374151' },
      formatter: '{b}: {c}秒',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: products.map((p) => p.name),
      axisLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.3)' } },
      axisLabel: { color: '#6b7280', fontSize: 12 },
    },
    yAxis: {
      type: 'value',
      max: 3,
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 11, formatter: '{value}s' },
      splitLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.2)', type: 'dashed' } },
    },
    series: [
      {
        type: 'bar',
        data: products.map((p) => ({
          value: p.performance.avgResponseTime,
          itemStyle: { borderRadius: [4, 4, 0, 0] },
        })),
        barWidth: '50%',
      },
    ],
  };

  // 准确率柱状图配置
  const accuracyOption = {
    color: Object.values(productColors),
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: { color: '#374151' },
      formatter: '{b}: {c}分',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: products.map((p) => p.name),
      axisLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.3)' } },
      axisLabel: { color: '#6b7280', fontSize: 12 },
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 11 },
      splitLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.2)', type: 'dashed' } },
    },
    series: [
      {
        type: 'bar',
        data: products.map((p) => ({
          value: p.performance.accuracy,
          itemStyle: { borderRadius: [4, 4, 0, 0] },
        })),
        barWidth: '50%',
      },
    ],
  };

  // 稳定性柱状图配置
  const stabilityOption = {
    color: Object.values(productColors),
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: { color: '#374151' },
      formatter: '{b}: {c}分',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: products.map((p) => p.name),
      axisLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.3)' } },
      axisLabel: { color: '#6b7280', fontSize: 12 },
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 11 },
      splitLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.2)', type: 'dashed' } },
    },
    series: [
      {
        type: 'bar',
        data: products.map((p) => ({
          value: p.performance.stability,
          itemStyle: { borderRadius: [4, 4, 0, 0] },
        })),
        barWidth: '50%',
      },
    ],
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">性能测试数据</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          从响应速度、上下文长度、准确率、稳定性四个维度对比产品性能表现
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">平均响应时间（秒）</h3>
          </div>
          <ReactECharts
            option={responseTimeOption}
            style={{ height: '280px', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
          <p className="text-sm text-gray-500 mt-2">数值越小越好 · 豆包响应最快(1.5s)</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Database className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">最大上下文长度（tokens）</h3>
          </div>
          <div className="space-y-4">
            {products
              .sort((a, b) => b.performance.maxTokens - a.performance.maxTokens)
              .map((product) => (
                <div key={product.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{product.name}</span>
                    <span className="text-sm text-gray-500">
                      {product.performance.maxTokens >= 1000000
                        ? `${(product.performance.maxTokens / 10000).toFixed(0)}万`
                        : product.performance.maxTokens.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(product.performance.maxTokens / 2000000) * 100}%`,
                      }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: productColors[product.id] }}
                    />
                  </div>
                </div>
              ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">Kimi支持200万tokens超长上下文，业界领先</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">准确率评分</h3>
          </div>
          <ReactECharts
            option={accuracyOption}
            style={{ height: '280px', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
          <p className="text-sm text-gray-500 mt-2">DeepSeek准确率最高(92分)，推理能力突出</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Shield className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">稳定性评分</h3>
          </div>
          <ReactECharts
            option={stabilityOption}
            style={{ height: '280px', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
          <p className="text-sm text-gray-500 mt-2">通义千问和DeepSeek稳定性最佳(90分)</p>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-900">性能综合评估</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 relative">
                  <Image src={product.logo} alt={product.name} fill className="object-contain" />
                </div>
                <span className="font-medium text-gray-900">{product.name}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">响应</span>
                  <span className="font-medium">{product.performance.avgResponseTime}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">上下文</span>
                  <span className="font-medium">
                    {product.performance.maxTokens >= 10000
                      ? `${(product.performance.maxTokens / 10000).toFixed(0)}万`
                      : product.performance.maxTokens}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">准确率</span>
                  <span className="font-medium">{product.performance.accuracy}分</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">稳定性</span>
                  <span className="font-medium">{product.performance.stability}分</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
