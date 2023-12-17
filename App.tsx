import React, {useState} from 'react';

import LearnImage from './learning-progress/LearnImage';
import LearnScrollView from './learning-progress/LearnScrollView';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnScrollView />;
}
