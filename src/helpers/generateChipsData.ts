import type { ChipItem } from '../types';

// Хелпер-костыль, который имитирует массив с чипсами переданными из стейта или бекенда

const generateChipsData = (length: number = 25): ChipItem[] => {
  const chips: ChipItem[] = [];
  for (let i = 1; i <= length; i++) {
    chips.push({ id: `chip#${i}`, label: `Chips ${i}` });
  }
  return chips;
};

export default generateChipsData;
