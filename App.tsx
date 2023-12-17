import React, {useState} from 'react';

import LearnActivityIndicator from './learning-progress/LearnActivityIndicator';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnActivityIndicator />;
}
