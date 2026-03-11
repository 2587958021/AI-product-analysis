'use client';

import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Wallet, CreditCard, Code, Gift, Crown, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
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

export default function Business() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">商业模式</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          对比四大AI产品的定价策略、免费额度、付费功能和API开放程度
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={product.logo}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {product.pricing.freeTier.includes('完全免费') ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      完全免费
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full flex items-center gap-1">
                      <Wallet className="w-4 h-4" />
                      有限免费
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Gift className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">免费版</div>
                    <div className="text-sm text-gray-600">{product.pricing.freeTier}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Crown className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">付费版</div>
                    <div className="text-sm text-gray-600">{product.pricing.paidTier}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Code className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">API定价</div>
                    <div className="text-sm text-gray-600">{product.pricing.apiPricing}</div>
                  </div>
                </div>

                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  访问官网
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">定价策略对比</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">产品</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">免费策略</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">付费价格</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">API价格竞争力</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 relative">
                        <Image
                          src={product.logo}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {product.pricing.freeTier.includes('完全免费') ? (
                      <span className="inline-flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        完全免费
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-yellow-600">
                        <XCircle className="w-4 h-4" />
                        有限额度
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-gray-600">
                    {product.pricing.paidTier.includes('按量') || product.pricing.paidTier.includes('API') ? (
                      <span className="text-gray-500">按需付费</span>
                    ) : (
                      product.pricing.paidTier.split('（')[0]
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {product.id === 'deepseek' || product.id === 'doubao' ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        极高性价比
                      </span>
                    ) : product.id === 'qianwen' ? (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        性价比高
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        中等
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-gray-900">免费策略最友好</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium text-green-700">豆包</span>和
            <span className="font-medium text-purple-700">DeepSeek</span>
            提供完全免费的C端服务
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 无使用额度限制</li>
            <li>• 适合个人日常使用</li>
            <li>• 降低用户尝试门槛</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-900">付费模式最清晰</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium text-blue-700">Kimi</span>采用订阅制，
            <span className="font-medium text-orange-700">通义千问</span>按量计费
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 订阅制：适合高频用户</li>
            <li>• 按量计费：灵活可控</li>
            <li>• 企业级服务完善</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-5 h-5 text-purple-600" />
            <h4 className="font-semibold text-gray-900">API性价比最高</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium text-purple-700">DeepSeek</span>和
            <span className="font-medium text-green-700">豆包</span>
            API价格最具竞争力
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• DeepSeek：￥0.001/千tokens</li>
            <li>• 豆包：￥0.0008/千tokens</li>
            <li>• 适合开发者集成</li>
          </ul>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">商业模式洞察</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">C端策略分化</h4>
            <p>
              豆包和DeepSeek采用"免费+口碑"策略快速获取用户；Kimi和通义千问采用"免费额度+付费增值"
              模式平衡成本与收入。
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">B端API竞争激烈</h4>
            <p>
              API价格战激烈，DeepSeek和豆包以极低价格吸引开发者，通义千问依托阿里云生态
              提供企业级服务。
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
