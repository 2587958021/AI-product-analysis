'use client';

import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { TrendingUp, PieChart, BarChart3, Users, Zap, Crown } from 'lucide-react';
import {
  marketShare2025,
  growthTrendData,
  tokenProcessingData,
  marketAnalysis,
} from '../data/marketData';

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

export default function MarketTrend() {
  // 折线图配置 - 用户增长趋势
  const lineChartOption = {
    color: growthTrendData.products.map((p) => p.color),
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: { color: '#374151' },
      formatter: (params: any[]) => {
        let result = params[0].axisValue + '<br/>';
        params.forEach((item) => {
          result += `${item.marker} ${item.seriesName}: ${item.value}亿MAU<br/>`;
        });
        return result;
      },
    },
    legend: {
      top: 0,
      icon: 'circle',
      itemGap: 15,
      textStyle: { color: '#6b7280', fontSize: 12 },
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
      boundaryGap: false,
      data: growthTrendData.months,
      axisLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.3)' } },
      axisLabel: { color: '#6b7280', fontSize: 11 },
    },
    yAxis: {
      type: 'value',
      name: '月活（亿）',
      nameTextStyle: { color: '#6b7280', fontSize: 11 },
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 11 },
      splitLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.2)', type: 'dashed' } },
    },
    series: growthTrendData.products.map((product) => ({
      name: product.name,
      type: 'line',
      data: product.data,
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: { width: 3 },
      emphasis: { focus: 'series' },
    })),
  };

  // 饼图配置 - 市场份额
  const pieChartOption = {
    color: marketShare2025.map((item) => item.color),
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: { color: '#374151' },
      formatter: (params: any) => {
        return `${params.name}<br/>MAU: ${params.value}亿 (${params.percent}%)`;
      },
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      itemGap: 15,
      textStyle: { color: '#6b7280', fontSize: 12 },
    },
    series: [
      {
        name: '市场份额',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 18,
            fontWeight: 'bold',
            formatter: '{b}\n{d}%',
          },
        },
        labelLine: { show: false },
        data: marketShare2025.map((item) => ({
          value: item.mau,
          name: item.product,
        })),
      },
    ],
  };

  // Token处理量柱状图
  const tokenChartOption = {
    color: tokenProcessingData.colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: { color: '#374151' },
      formatter: (params: any[]) => {
        return `${params[0].name}<br/>日均Token: ${params[0].value}万亿`;
      },
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
      data: tokenProcessingData.product,
      axisLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.3)' } },
      axisLabel: { color: '#6b7280', fontSize: 12 },
    },
    yAxis: {
      type: 'value',
      name: '万亿/日',
      nameTextStyle: { color: '#6b7280', fontSize: 11 },
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 11 },
      splitLine: { lineStyle: { color: 'rgba(156, 163, 175, 0.2)', type: 'dashed' } },
    },
    series: [
      {
        type: 'bar',
        data: tokenProcessingData.tokens.map((value, index) => ({
          value,
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: tokenProcessingData.colors[index],
          },
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">市场趋势分析</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          基于 QuestMobile 2024-2025 真实数据，分析AI产品市场份额与用户增长趋势
        </p>
      </motion.div>

      {/* 关键指标卡片 */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-gray-900">市场总规模</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900">{marketAnalysis.totalMAU}亿</div>
          <p className="text-sm text-gray-600 mt-1">AI原生App月活用户</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Crown className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-gray-900">市场领导者</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900">{marketAnalysis.leader}</div>
          <p className="text-sm text-gray-600 mt-1">占比 {marketAnalysis.leaderShare}%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold text-gray-900">增长最快</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900">{marketAnalysis.growthFastest}</div>
          <p className="text-sm text-gray-600 mt-1">增长 {marketAnalysis.growthRate}%</p>
        </div>
      </motion.div>

      {/* 折线图和饼图 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">用户增长趋势（2024-2025）</h3>
          </div>
          <ReactECharts
            option={lineChartOption}
            style={{ height: '350px', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
          <p className="text-sm text-gray-500 mt-2">
            DeepSeek 2025年1月爆发式增长，豆包持续领先
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <PieChart className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">市场份额分布（2025年3月）</h3>
          </div>
          <ReactECharts
            option={pieChartOption}
            style={{ height: '350px', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
          <p className="text-sm text-gray-500 mt-2">
            豆包以45.2%份额领先，DeepSeek快速崛起至26.9%
          </p>
        </motion.div>
      </div>

      {/* Token处理量 */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-100 rounded-lg">
            <BarChart3 className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="font-semibold text-gray-900">日均Token处理量</h3>
        </div>
        <ReactECharts
          option={tokenChartOption}
          style={{ height: '280px', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
        <p className="text-sm text-gray-500 mt-2">
          豆包日均处理63万亿Token，DeepSeek达45万亿
        </p>
      </motion.div>

      {/* 数据来源说明 */}
      <motion.div
        variants={itemVariants}
        className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-600"
      >
        <h4 className="font-semibold text-gray-900 mb-2">数据来源说明</h4>
        <ul className="space-y-1">
          <li>• 数据来源：QuestMobile 2024-2025 AI应用报告</li>
          <li>• 统计时间：2025年3月</li>
          <li>• 统计范围：AI原生App月活跃用户（MAU）</li>
          <li>• 原文链接：https://www.questmobile.com.cn/</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
