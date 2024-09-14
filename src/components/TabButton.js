import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import styled from "styled-components";

const StyledImage = styled(Image)`
    filter: ${props => props.isActive ? 'brightness(0) invert(1)' : 'none'};
    margin-bottom: 0.25rem; 
`;

const TabButton = ({ tabName, isActive }) => {
    return (
        <li >
            <Link href={`/${tabName || ''}`} className={`cursor-pointer text-black text-xs p-5 rounded-2xl w-16 h-16 flex flex-col items-center justify-center ${isActive ? "bg-gradient-to-r from-orange-400 to-red-500 text-white" : "bg-slate-200"}`}>
                <StyledImage src={`/images/${tabName ? tabName : "home"}.svg`} alt={tabName} width={20} height={20} />
                <span>{capitalizeFirstLetter(tabName ? tabName : "home")}</span>
            </Link>
        </li>
    )
}

export default TabButton;