import {useRef, type FormEvent } from "react"

type NewGoalProps = {
    onAddGoal:(goal:string,summary:string)=>void;
}
export default function NewGoal({onAddGoal}:NewGoalProps){
    //initialize the ref
    const goal = useRef<HTMLInputElement>(null) //putting a type to ref
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const enteredGoal = goal.current!.value //ref ! this wont be null
        const enteredSummary = summary.current!.value

        event.currentTarget.reset(); //cleaning the formf
        onAddGoal(enteredGoal,enteredSummary)


      
    }
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal}  />
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}
