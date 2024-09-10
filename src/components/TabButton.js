const TabButton = ({ activeTab, tabName, onClick }) => {
    const tabNameLowercase = tabName.toLowerCase();

    return (
        <li className={`cursor-pointer text-black text-xs p-5 rounded-2xl ${activeTab === tabNameLowercase ? "bg-gradient-to-r from-orange-400 to-red-500 text-white" : "bg-slate-200"}`} onClick={onClick}>
            {tabName}
        </li>
    )
}

export default TabButton;