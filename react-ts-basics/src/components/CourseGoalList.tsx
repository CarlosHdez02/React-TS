import { type FC,type ReactNode } from "react";
import CourseGoals from "./CourseGoals.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint" >You have no course goals yet, add some</InfoBox>
    );
  }

  let warningBox: ReactNode;
  if(goals.length >= 4){
    warningBox =(
     <InfoBox mode="warning" severity="high">You have too many goals</InfoBox>
    )
  }

  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals
              id={goal.id}
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
            >
              <p> {goal.description} </p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
};
export default CourseGoalList;
