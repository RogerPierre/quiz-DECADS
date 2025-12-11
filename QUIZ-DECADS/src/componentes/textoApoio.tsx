


interface IInputparagrafro{
    label:string
    className:string
}
export const ParagrafroTEXTO = ({label , className}:IInputparagrafro) => {
    return(
        <>
            <p className={className}>
                {label}
            </p>
        </>
    )
}