import Image from "next/image";
import styled from "styled-components";

const MultiLineText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: black;
  font-weight: 600;
`;

const UserInfoDetail = ({ icon, text, detail }) => {
    return (
        <div className="flex items-start">
            <div className="flex justify-center items-center w-[50px] h-[50px]">
                <Image src={`/images/${icon}.png`} alt={icon} width={40} height={40} />
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-translucentDarkBrown">{text}</span>
                <MultiLineText>{detail}</MultiLineText>
            </div>
        </div>
    )
}

export default UserInfoDetail;