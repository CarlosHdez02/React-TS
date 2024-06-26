import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import image from "./assets/react.svg";
import "./index.css";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";
import Input from "./components/Input.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal:string,summary:string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <>
      <main>
        <Header image={{ src: image, alt: "A  list of goals" }}>
          <h1>Your course goals</h1>
        </Header>

       <NewGoal
        onAddGoal={handleAddGoal}
       />
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </main>
    </>
  );
}

export default App;
