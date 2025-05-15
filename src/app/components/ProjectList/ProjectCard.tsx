import Image from "next/image";
import React from "react";
import { IProject } from "../../utils/interface/ProjectPage/IProject";
import Link from "next/link";
import { imageKitLoader } from "../../utils/ImageKitLoader";

interface Iprops {
  card: IProject;
}
const ProjectCard: React.FC<Iprops> = (props) => {
  const { card } = props;
  return (
    <div className=" bg-[#f7f7f7] flex flex-col-reverse md:flex-row gap-4 justify-between rounded-md overflow-hidden md:overflow-auto">
      <div className=" p-4 md:p-10 space-y-9">
        <Image
          loader={imageKitLoader}
          src={card?.logo}
          width={1000}
          height={1000}
          alt="riverdale logo"
          className="  md:min-w-[170px]"
        />
        <div className="space-y-4 w-full">
          <div>
            <p className="text-sm md:text-base font-plus-jakarta-sans leading-link-text ">
              {card?.bodyText1}
            </p>
            <p className="text-sm md:text-base font-plus-jakarta-sans leading-link-text ">
              {card?.bodyText2}
            </p>
          </div>
          <Link href={card?.link}>
            <div className="flex w-full  flex-row items-center justify-center mt-5">
              <p className="w-[10%] h-[1px] bg-red"></p>
              <p className="text-red text-sm md:text-base font-plus-jakarta-sans">
                See Details
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Image
        loader={imageKitLoader}
        src={card?.img}
        width={1000}
        height={1000}
        alt="milava"
        className="w-full h-[250px] md:h-auto md:min-w-[450px] md:min-h-[500px] object-cover"
      />
    </div>
  );
};

export default ProjectCard;
