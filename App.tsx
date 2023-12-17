import React, {useState} from 'react';

import LearnImage from './learning-progress/LearnImage';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnImage />;
}
