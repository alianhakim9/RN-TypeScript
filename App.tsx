import React, {useState} from 'react';

import LearnSafeAreaView from './learning-progress/LearnSafeAreaView';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnSafeAreaView />;
}
