import React, {useState} from 'react';

import LearnAlert from './learning-progress/LearnAlert';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnAlert />;
}
