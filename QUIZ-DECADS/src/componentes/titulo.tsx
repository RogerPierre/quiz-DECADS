



interface IInputTitulo{
    label:string
    secondaryLabel:string
}
export const Titulo=({  label , secondaryLabel }:IInputTitulo)=>{
    return(
        <>
            <h1>
                {label}
            </h1>
            <h2>
                {secondaryLabel}
            </h2>
        </>
    )
}