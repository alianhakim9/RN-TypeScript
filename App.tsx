import React, {useState} from 'react';

import LearnStatusBar from './learning-progress/LearnStatusBar';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnStatusBar />;
}
