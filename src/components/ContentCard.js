const ContentCard = ({ content, color, title, subTitle, image }) => {
    return (
        <div className={`flex-1 flex flex-col gap-1 ${`bg-${color} || "bg-red-200"`} p-3 rounded-lg`}>
            {title && <h4 className="text-black text-2xl font-semibold">{title}</h4>}
            {content && <p className="text-black text-xs">
                {content}
            </p>}
        </div>
    )
}

export default ContentCard;