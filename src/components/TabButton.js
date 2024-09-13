import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstLetter } from "../utils/stringUtils";

const TabButton = ({ tabName, isActive }) => {
    return (
        <li >
            <Link href={`/${tabName || ''}`} className={`cursor-pointer text-black text-xs p-5 rounded-2xl w-16 h-16 flex flex-col items-center justify-center ${isActive ? "bg-gradient-to-r from-orange-400 to-red-500 text-white" : "bg-slate-200"}`}>
                <Image src={`/images/${tabName ? tabName : "home"}.png`} alt={tabName} width={20} height={20} className="mb-1" />
                <span>{capitalizeFirstLetter(tabName ? tabName : "home")}</span>
            </Link>
        </li>
    )
}

export default TabButton;