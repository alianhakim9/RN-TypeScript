import React, {useState} from 'react';

import LearnRelativeAndAbsolute from './learning-progress/LearnRelativeAndAbsolute';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <LearnRelativeAndAbsolute />;
}
