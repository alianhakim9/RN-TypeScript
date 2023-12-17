import React, {useState} from 'react';

import LearnCustomComponents from './learning-progress/LearnCustomComponents';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnCustomComponents />;
}
