import Image from "next/image";

const TabButton = ({ activeTab, tabName, onClick }) => {
    const tabNameLowercase = tabName.toLowerCase();

    return (
        <li className={`cursor-pointer text-black text-xs p-5 rounded-2xl w-16 h-16 flex flex-col items-center justify-center ${activeTab === tabNameLowercase ? "bg-gradient-to-r from-orange-400 to-red-500 text-white" : "bg-slate-200"}`} onClick={onClick}>
            <Image src={`/images/${tabNameLowercase}.png`} alt={tabName} width={20} height={20} />
            <span>{tabName}</span>
        </li>
    )
}

export default TabButton;