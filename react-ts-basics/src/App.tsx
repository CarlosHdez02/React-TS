import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import image from "./assets/react.svg";
import "./index.css";
import { useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id:number){
    setGoals((prevGoals)=> prevGoals.filter((goal)=> goal.id !== id))
  }
  return (
    <>
      <main>
        <Header image={{ src: image, alt: "A  list of goals" }}>
          <h1>Your course goals</h1>
        </Header>

        <button onClick={handleAddGoal} >Add goal</button>
      <CourseGoalList 
        goals={goals}
        onDeleteGoal = {handleDeleteGoal}
        />       
      </main>
    </>
  );
}

export default App;
