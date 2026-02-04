
import { Prize } from './types';

export const PRIZES: Prize[] = [
  { id: 1, label: '20', value: 20, color: '#b91c1c', probability: 0.10, description: '恭喜獲得 20 樂透金！' }, // 明亮宮廷紅
  { id: 4, label: '5', value: 5, color: '#991b1b', probability: 0.20, description: '恭喜獲得 5 樂透金！' },   // 胭脂紅
  { id: 2, label: '15', value: 15, color: '#7c2d12', probability: 0.15, description: '恭喜獲得 15 樂透金！' }, // 銅金色
  { id: 5, label: '5', value: 5, color: '#450a0a', probability: 0.20, description: '恭喜獲得 5 樂透金！' },   // 深棗紅
  { id: 3, label: '10', value: 10, color: '#4c1d95', probability: 0.35, description: '恭喜獲得 10 樂透金！' }, // 深紫色
];

export const PRIZE_GREETINGS: Record<number, string> = {
  20: "一馬當先，財源廣進！恭喜獲得 20 樂透金，祝您馬年行大運，發財順利！",
  15: "萬馬奔騰，喜事重重！獲得 15 樂透金，願您馬年吉祥如意，福氣滿門！",
  10: "千馬奔騰，吉祥平安！獲得 10 樂透金，祝您馬年身體健康，萬事勝意！",
  5: "馬力十足，好運連連！獲得 5 樂透金，小確幸也能馬到成功，喜氣洋洋！"
};
