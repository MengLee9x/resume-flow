import Image from "next/image";

const ContentCard = ({ content, title, subTitle, image, classname, titleClassName }) => {
    return (
        <div className={`${classname} flex-1 flex flex-col px-5 py-2 rounded-2xl `}>
            {subTitle && <p className="text-black text-sm text-translucentDarkBrown">{subTitle}</p>}
            <div className="flex flex-row gap-2">
                <Image
                    src={`/images/${image}.svg`}
                    alt={image}
                    width={26}
                    height={26}
                />
                {title && <h4 className={`${titleClassName} text-black text-2xl font-semibold`}>{title}</h4>}

            </div>
            {content && <p className="text-black text-sm">
                {content}
            </p>}
        </div>
    )
}

export default ContentCard;