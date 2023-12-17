import React, {useState} from 'react';

import LearnModal from './learning-progress/LearnModal';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnModal />;
}
