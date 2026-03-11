// 数据来源：QuestMobile 2024-2025 报告
// 引用：QuestMobile发布2025年AI应用榜:豆包、DeepSeek、元宝位列前三

export interface MarketShareData {
  product: string;
  mau: number; // 月活跃用户（亿）
  color: string;
}

// 2025年3月 AI原生App月活数据
export const marketShare2025: MarketShareData[] = [
  { product: '豆包', mau: 2.26, color: '#10b981' },
  { product: 'DeepSeek', mau: 1.35, color: '#8b5cf6' },
  { product: '腾讯元宝', mau: 0.41, color: '#3b82f6' },
  { product: '通义千问', mau: 0.25, color: '#f97316' },
  { product: 'Kimi', mau: 0.18, color: '#ec4899' },
  { product: '其他', mau: 0.55, color: '#9ca3af' },
];

// 月活增长趋势数据（2024年6月 - 2025年3月）
export const growthTrendData = {
  months: ['2024-06', '2024-08', '2024-10', '2024-12', '2025-02', '2025-03'],
  products: [
    {
      name: '豆包',
      data: [0.8, 1.2, 1.5, 1.8, 2.1, 2.26],
      color: '#10b981',
    },
    {
      name: 'DeepSeek',
      data: [0.05, 0.08, 0.12, 0.5, 1.2, 1.35],
      color: '#8b5cf6',
    },
    {
      name: '通义千问',
      data: [0.15, 0.18, 0.2, 0.22, 0.24, 0.25],
      color: '#f97316',
    },
    {
      name: 'Kimi',
      data: [0.25, 0.28, 0.26, 0.24, 0.2, 0.18],
      color: '#ec4899',
    },
  ],
};

// 日均Token处理量（万亿）
export const tokenProcessingData = {
  product: ['豆包', 'DeepSeek', '通义千问', 'Kimi'],
  tokens: [63, 45, 38, 12], // 万亿/日
  colors: ['#10b981', '#8b5cf6', '#f97316', '#ec4899'],
};

// 市场格局分析
export const marketAnalysis = {
  totalMAU: 5.0, // 总月活约5亿
  leader: '豆包',
  leaderShare: 45.2, // %
  growthFastest: 'DeepSeek',
  growthRate: 2600, // % (从0.05到1.35)
};
