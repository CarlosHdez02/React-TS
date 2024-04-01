import { type FC } from "react";
import CourseGoals from "./CourseGoals.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals id={goal.id} title={goal.title} onDeleteGoal={onDeleteGoal}>
            <p> {goal.description} </p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
};
export default CourseGoalList;
