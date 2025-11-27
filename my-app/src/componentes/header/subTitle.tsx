

interface IInputSubTitle{
    label:string
}
export const SubTitles=({label}:IInputSubTitle)=>{
    return  (
        <div>
            <h3>{label}</h3>
        </div>
    )
}