import styles from './chip.module.css';

import type { ChipProps } from '../../types';

// Переиспользуемый компонент чипса

const Chip: React.FC<ChipProps> = ({ label, selected = false, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.chip} ${selected ? styles.selected : ''}`}>
      {label}
    </button>
  );
};

export default Chip;
