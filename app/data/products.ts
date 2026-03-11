export interface Product {
  id: string;
  name: string;
  company: string;
  slogan: string;
  logo: string;
  website: string;
  launchDate: string;
  version: string;
  description: string;
  features: {
    textGeneration: number;
    multimodal: number;
    longContext: number;
    codeAbility: number;
    reasoning: number;
    plugins: number;
  };
  ux: {
    interfaceDesign: number;
    interactionFlow: number;
    responseSpeed: number;
    mobileExperience: number;
    accessibility: number;
  };
  performance: {
    avgResponseTime: number;
    maxTokens: number;
    accuracy: number;
    stability: number;
  };
  pricing: {
    freeTier: string;
    paidTier: string;
    apiPricing: string;
  };
  highlights: string[];
  weaknesses: string[];
}

export const products: Product[] = [
  {
    id: 'qianwen',
    name: '通义千问',
    company: '阿里巴巴',
    slogan: '懂你所需，答你所问',
    logo: '/logo/通义千问.svg',
    website: 'https://tongyi.aliyun.com',
    launchDate: '2023年4月',
    version: 'Qwen2.5',
    description: '阿里云推出的大语言模型，支持多模态理解和生成，在代码、数学、推理等方面表现优异。',
    features: {
      textGeneration: 90,
      multimodal: 88,
      longContext: 85,
      codeAbility: 92,
      reasoning: 88,
      plugins: 85,
    },
    ux: {
      interfaceDesign: 85,
      interactionFlow: 88,
      responseSpeed: 86,
      mobileExperience: 84,
      accessibility: 87,
    },
    performance: {
      avgResponseTime: 2.1,
      maxTokens: 128000,
      accuracy: 88,
      stability: 90,
    },
    pricing: {
      freeTier: '每日有限额度',
      paidTier: '按量计费，约￥0.006/千tokens',
      apiPricing: '输入￥0.0005/千tokens，输出￥0.002/千tokens',
    },
    highlights: [
      '代码能力突出，支持100+编程语言',
      '开源模型生态完善（Qwen系列）',
      '与阿里云产品深度集成',
      '多模态能力强（图文理解）',
    ],
    weaknesses: [
      'C端知名度相对较低',
      '创意写作能力有待提升',
    ],
  },
  {
    id: 'kimi',
    name: 'Kimi',
    company: '月之暗面',
    slogan: '帮你看更大的世界',
    logo: '/logo/KIMI.svg',
    website: 'https://kimi.moonshot.cn',
    launchDate: '2023年10月',
    version: 'Kimi k1.5',
    description: '月之暗面科技推出的AI助手，以超长上下文窗口著称，支持200万字上下文，适合长文档处理。',
    features: {
      textGeneration: 88,
      multimodal: 82,
      longContext: 98,
      codeAbility: 85,
      reasoning: 86,
      plugins: 70,
    },
    ux: {
      interfaceDesign: 92,
      interactionFlow: 90,
      responseSpeed: 84,
      mobileExperience: 88,
      accessibility: 85,
    },
    performance: {
      avgResponseTime: 2.8,
      maxTokens: 2000000,
      accuracy: 86,
      stability: 88,
    },
    pricing: {
      freeTier: '每日有限额度',
      paidTier: '￥19.9/月（高峰时段优先）',
      apiPricing: '输入￥0.006/千tokens，输出￥0.03/千tokens',
    },
    highlights: [
      '超长上下文（200万字）业界领先',
      '界面设计简洁优雅',
      '文件处理能力强大',
      '适合学术研究和长文档分析',
    ],
    weaknesses: [
      '插件生态相对薄弱',
      '多模态能力一般',
      '复杂推理能力有待提升',
    ],
  },
  {
    id: 'doubao',
    name: '豆包',
    company: '字节跳动',
    slogan: '你的AI朋友',
    logo: '/logo/豆包.svg',
    website: 'https://www.doubao.com',
    launchDate: '2023年8月',
    version: 'Doubao-pro',
    description: '字节跳动推出的AI助手，依托抖音生态，在内容创作和娱乐场景有独特优势。',
    features: {
      textGeneration: 86,
      multimodal: 85,
      longContext: 80,
      codeAbility: 82,
      reasoning: 84,
      plugins: 78,
    },
    ux: {
      interfaceDesign: 90,
      interactionFlow: 92,
      responseSpeed: 90,
      mobileExperience: 92,
      accessibility: 88,
    },
    performance: {
      avgResponseTime: 1.5,
      maxTokens: 32000,
      accuracy: 84,
      stability: 88,
    },
    pricing: {
      freeTier: '完全免费',
      paidTier: '专业版￥19/月',
      apiPricing: '输入￥0.0008/千tokens，输出￥0.002/千tokens',
    },
    highlights: [
      '响应速度快，体验流畅',
      '移动端体验优秀',
      '与抖音生态联动',
      '语音交互体验好',
    ],
    weaknesses: [
      '上下文长度相对较短',
      '专业领域深度不足',
      '代码能力一般',
    ],
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    company: '深度求索',
    slogan: '深度思考，智能探索',
    logo: '/logo/deepseek.svg',
    website: 'https://chat.deepseek.com',
    launchDate: '2023年7月',
    version: 'DeepSeek-V3',
    description: '深度求索推出的AI助手，以强大的推理能力和数学能力著称，在学术和专业领域表现突出。',
    features: {
      textGeneration: 88,
      multimodal: 80,
      longContext: 88,
      codeAbility: 90,
      reasoning: 95,
      plugins: 75,
    },
    ux: {
      interfaceDesign: 82,
      interactionFlow: 85,
      responseSpeed: 88,
      mobileExperience: 80,
      accessibility: 82,
    },
    performance: {
      avgResponseTime: 2.3,
      maxTokens: 64000,
      accuracy: 92,
      stability: 90,
    },
    pricing: {
      freeTier: '完全免费',
      paidTier: 'API按量计费',
      apiPricing: '输入￥0.001/千tokens，输出￥0.005/千tokens',
    },
    highlights: [
      '推理能力业界顶尖',
      '数学和逻辑能力突出',
      '开源模型（DeepSeek系列）',
      '性价比极高',
    ],
    weaknesses: [
      '界面设计较为简单',
      '多模态能力有限',
      'C端产品化程度较低',
    ],
  },
];

export const featureLabels: Record<string, string> = {
  textGeneration: '文本生成',
  multimodal: '多模态',
  longContext: '长上下文',
  codeAbility: '代码能力',
  reasoning: '推理能力',
  plugins: '插件生态',
};

export const uxLabels: Record<string, string> = {
  interfaceDesign: '界面设计',
  interactionFlow: '交互流程',
  responseSpeed: '响应速度',
  mobileExperience: '移动体验',
  accessibility: '可访问性',
};
