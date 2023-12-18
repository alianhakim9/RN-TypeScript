import React, {useState} from 'react';

import LearnShadowAndElevation from './learning-progress/LearnShadowAndElevation';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnShadowAndElevation />;
}
