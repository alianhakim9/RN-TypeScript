import React, {useState} from 'react';

import LearnFlex from './learning-progress/LearnFlex';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnFlex />;
}
