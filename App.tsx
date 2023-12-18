import React, {useState} from 'react';

import LearnStyleInheritance from './learning-progress/LearnStyleInheritance';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnStyleInheritance />;
}
