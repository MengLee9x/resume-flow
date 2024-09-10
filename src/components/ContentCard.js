const ContentCard = ({ content, title, subTitle, image, classname, titleClassName }) => {
    return (
        <div className={`${classname} flex-1 flex flex-col gap-1 p-3 rounded-xl `}>
            {subTitle && <p className="text-black text-sm text-translucentDarkBrown">{subTitle}</p>}
            {title && <h4 className={`${titleClassName} text-black text-2xl font-semibold`}>{title}</h4>}
            {content && <p className="text-black text-xs">
                {content}
            </p>}
        </div>
    )
}

export default ContentCard;