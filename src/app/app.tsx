import { useState } from 'react';

import generateChipsData from '../helpers/generateChipsData';
import Chips from '../components/chips/chips';

import './app.module.css';

const chipsList = generateChipsData(); // генерируем массив чипсов

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <div className="container">
      <Chips chips={chipsList} selectedId={selectedId} onSelect={setSelectedId} />
    </div>
  );
};

export default App;
