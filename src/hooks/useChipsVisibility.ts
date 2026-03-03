import { useEffect, useRef, useState } from 'react';

import type { ChipItem, Ref, VisibilityList } from '../types';

// Хук для наблюдения за видимостью чипсов в родительском контейнере.

const useChipsVisibility = (chips: ChipItem[]) => {
  const [visibilityList, setVisibilityList] = useState<VisibilityList>({});

  const containerRef = useRef<Ref>(null);
  const chipRefs = useRef<Ref[]>([]);

  useEffect(() => {
    // Добавляем к каждому чипсу наблюдатель и снимает наблюдение при размонтировании
    const observers: IntersectionObserver[] = [];

    chipRefs.current.forEach((element, index) => {
      const chip = chips[index];
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibilityList((prev) => ({
            ...prev,
            [chip.id]: entry.intersectionRatio === 1,
          }));
        },
        {
          root: containerRef.current,
          threshold: 1,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((item) => item.disconnect());
    };
  }, [chips]);

  const hiddenChips = chips.filter((chip) => visibilityList[chip.id] === false);

  return { containerRef, chipRefs, visibilityList, hiddenChips };
};

export default useChipsVisibility;
