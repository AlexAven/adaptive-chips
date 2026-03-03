import Chip from '../chip/chip';
import useChipsVisibility from '../../hooks/useChipsVisibility';

import styles from './chips.module.css';

import type { ChipsProps } from '../../types';

// Компонент-контейнер с чипсами и всплывающим поповером(попапом)

const Chips: React.FC<ChipsProps> = ({ chips, selectedId, onSelect }) => {
  const { containerRef, chipRefs, visibilityList, hiddenChips } = useChipsVisibility(chips);

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={styles.container}>
        {chips.map((chip, index) => (
          <div
            key={chip.id}
            ref={(elem) => {
              chipRefs.current[index] = elem;
            }}
            // eslint-disable-next-line max-len
            className={`${styles.chipWrapper} ${visibilityList[chip.id] === false ? styles.hidden : styles.visible}`}
          >
            <Chip
              label={chip.label}
              selected={selectedId === chip.id}
              onClick={() => onSelect?.(chip.id)}
            />
          </div>
        ))}
      </div>

      {hiddenChips.length > 0 && (
        <>
          <button className={styles.popoverBtn} popoverTarget="popover">
            ...
          </button>

          <div className={styles.popover} id="popover" popover="auto">
            <div className={styles.popoverContent}>
              {hiddenChips.map((chip) => (
                <Chip
                  key={chip.id}
                  label={chip.label}
                  selected={selectedId === chip.id}
                  onClick={() => onSelect?.(chip.id)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chips;
