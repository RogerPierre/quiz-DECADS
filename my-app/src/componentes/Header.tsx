




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


interface IInputHeaderMOD{
    labelTitle:string
    labelSubTitle:string
}
export const HeaderMOD=({labelTitle,labelSubTitle}:IInputHeaderMOD)=>{
    return(
        <div>
        <MainTitle
        label={labelTitle}
        />

        <SubTitles
        label={labelSubTitle}
        />
        </div>
    )
}