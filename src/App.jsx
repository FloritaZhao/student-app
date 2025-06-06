import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import './components/StudentList.css';



function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      Here&apos;s the first rendered student list:
      <StudentList></StudentList>
      Here&apos;s the second rendered student list:
      <StudentList></StudentList>
    </main>
  
  );
}

export default App;
