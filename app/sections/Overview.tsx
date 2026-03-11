'use client';

import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Building2, Calendar, Sparkles, Quote, ExternalLink } from 'lucide-react';
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

export default function Overview() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">产品基础信息</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          对比分析国内四大主流AI助手的基本信息、定位和核心特点
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-500">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{product.company}</span>
                  </div>
                </div>
                <div className="w-14 h-14 relative">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                <Quote className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium italic">{product.slogan}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{product.launchDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  <span>{product.version}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 mb-2">核心亮点</div>
                <div className="flex flex-wrap gap-2">
                  {product.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {highlight.split('，')[0]}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                访问官网
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">分析总结</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-900">通义千问：</span>
            技术实力强，代码能力突出，开源生态完善
          </div>
          <div>
            <span className="font-medium text-gray-900">Kimi：</span>
            长文本处理能力业界领先，界面设计优雅
          </div>
          <div>
            <span className="font-medium text-gray-900">豆包：</span>
            用户体验流畅，移动端表现优秀，生态联动强
          </div>
          <div>
            <span className="font-medium text-gray-900">DeepSeek：</span>
            推理能力顶尖，数学逻辑突出，性价比极高
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
