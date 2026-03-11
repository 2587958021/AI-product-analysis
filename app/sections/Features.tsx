'use client';

import { motion } from 'framer-motion';
import { products, featureLabels } from '../data/products';
import ReactECharts from 'echarts-for-react';
import { Lightbulb, Wrench, Puzzle, Brain, FileText, Palette } from 'lucide-react';
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

const featureIcons: Record<string, React.ReactNode> = {
  textGeneration: <Brain className="w-5 h-5" />,
  multimodal: <Palette className="w-5 h-5" />,
  longContext: <FileText className="w-5 h-5" />,
  codeAbility: <Wrench className="w-5 h-5" />,
  reasoning: <Lightbulb className="w-5 h-5" />,
  plugins: <Puzzle className="w-5 h-5" />,
};

export default function Features() {
  const radarOption = {
    color: Object.values(productColors),
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: {
        color: '#374151',
      },
    },
    legend: {
      bottom: 0,
      icon: 'circle',
      itemGap: 20,
      textStyle: {
        color: '#6b7280',
        fontSize: 12,
      },
    },
    radar: {
      indicator: Object.values(featureLabels).map((label) => ({
        name: label,
        max: 100,
      })),
      center: ['50%', '45%'],
      radius: '65%',
      axisName: {
        color: '#6b7280',
        fontSize: 11,
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(59, 130, 246, 0.02)', 'rgba(59, 130, 246, 0.05)'],
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
      },
    },
    series: [
      {
        type: 'radar',
        data: products.map((product) => ({
          value: Object.keys(featureLabels).map(
            (key) => product.features[key as keyof typeof product.features]
          ),
          name: product.name,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            width: 2,
          },
          areaStyle: {
            opacity: 0.15,
          },
        })),
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">核心功能对比</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          从文本生成、多模态、长上下文、代码能力、推理能力、插件生态六个维度对比
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">能力雷达图</h3>
          <ReactECharts
            option={radarOption}
            style={{ height: '360px', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">详细评分</h3>
          <div className="space-y-4">
            {Object.entries(featureLabels).map(([key, label]) => (
              <div key={key} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-500">{featureIcons[key]}</span>
                  <span className="font-medium text-gray-900">{label}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {products.map((product) => (
                    <div key={product.id} className="text-center">
                      <div
                        className="text-lg font-bold"
                        style={{ color: productColors[product.id] }}
                      >
                        {product.features[key as keyof typeof product.features]}
                      </div>
                      <div className="text-xs text-gray-500">{product.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src={product.logo}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-500">核心优势</p>
              </div>
            </div>
            <ul className="space-y-2">
              {product.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: productColors[product.id] }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
