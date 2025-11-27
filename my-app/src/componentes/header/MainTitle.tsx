

interface IInputTitle{
    label:string
}

export const MainTitle=({label}:IInputTitle)=>{
    return (
        <div>
            <h1 > {label}</h1>
        </div>
    )
}