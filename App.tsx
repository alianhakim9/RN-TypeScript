import React, {useState} from 'react';

import LearnStyling from './learning-progress/LearnStyling';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnStyling />;
}
