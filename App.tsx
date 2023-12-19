import React, {useState} from 'react';

import LearnUseWindowDimension from './learning-progress/learn-dimension-api/LearnUseWindowDimension';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnUseWindowDimension />;
}
