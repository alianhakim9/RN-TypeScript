import React, {useState} from 'react';

import LearnButton from './learning-progress/LearnButton';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnButton />;
}
