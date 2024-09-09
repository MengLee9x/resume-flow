import Image from "next/image";

const SocialButton = ({ icon, link }) => {
  return (
    <a className="bg-background flex items-center justify-center rounded-lg w-16 h-16" href={link} target="_blank" rel="noopener noreferrer">
        <Image
                src={`/images/${icon}.png`}
                alt={icon}
                width={64}
                height={64}
        />
    </a>
  );
};

export default SocialButton;