
type InputProps = {
    label:string;
    id:string;

}
//wrapper component
export default function Input({label,id}:InputProps){
    return(
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text"/>
        </p>
    )
}