const SectionHeader = ({ header }) => {
    return (
        <div className="flex gap-4 items-center mb-6">
            <h2 className="text-black text-3xl font-bold">{header}</h2>
            <div className="bg-gradient-to-r from-orange-400 to-red-500 w-4/12 h-[2px] ml-4"></div>
        </div>
    )
}

export default SectionHeader;