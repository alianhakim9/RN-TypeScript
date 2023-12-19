import React, {useState} from 'react';

import LearnPlatformSpecificCode from './learning-progress/LearnPlatformSpecificCode';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnPlatformSpecificCode />;
}
