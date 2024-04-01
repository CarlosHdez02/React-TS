//import { type FC, PropsWithChildren, type ReactNode  } from "react";
import { type ReactNode  } from "react";
//type is so the browser removes it

interface CourseGoalProps {
    id:number
    title: string;
    children: ReactNode
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoals({title,id, children, onDeleteGoal}:CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button
        onClick={()=> onDeleteGoal(id)}
      >Delete</button>
    </article>
  );
}
//type CourseGoalProps = PropsWithChildren<{title:string}>

/*


const CourseGoal :FC<CourseGoalProps> = ({title,children})=>{
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
export default CourseGoal
*/