import { MainTitle } from "./header/MainTitle";
import { SubTitles } from "./header/subTitle";



interface IInputHeader{
    labelTitle:string
    labelSubTitle:string
}
export const Header=({labelTitle,labelSubTitle}:IInputHeader)=>{
    return(
        <div><MainTitle
        label={labelTitle}
        />

        <SubTitles
        label={labelSubTitle}
        />
        </div>
    )
}