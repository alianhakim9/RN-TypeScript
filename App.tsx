import React, {useState} from 'react';

import LearnPressable from './learning-progress/LearnPressable';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnPressable />;
}
