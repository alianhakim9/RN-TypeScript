import React, {useState} from 'react';

import LearnMultipleStyle from './learning-progress/LearnMultipleStyle';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnMultipleStyle />;
}
