import Image from "next/image";
import { IDirectorMessage } from "../../utils/interface/directorMessage";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const DirectorMessage: React.FC<IDirectorMessage> = (props) => {
  const { message, position, signImage } = props;

  return (
    <section className="font-plus-jakarta-sans flex flex-col items-center justify-center gap-4 text-base md:max-w-[50%] max-w-[90%] mx-auto   text-[#6B7280] md:py-20 text-center mt-10 md:mt-0">
      <p className="font-plus-jakarta-sans  text-base   leading-link-text italic text-[#6B7280] text-center ">
        <span className="text-3xl font-bold ">" </span>
        {message} <span className="text-3xl font-bold">"</span>
      </p>
      {signImage && position && (
        <div>
          <div className="flex flex-row gap-1 items-center">
            <div className="w-[50px] h-[0.1px] bg-black"></div>
            <Image
              loader={imageKitLoader}
              src={signImage}
              width={200}
              height={200}
              alt="signature"
            />
            <div className="w-[50px] h-[0.1px] bg-black"></div>
          </div>
          <p className="text-xs w-[50%] mx-auto">{position}</p>
        </div>
      )}
    </section>
  );
};

export default DirectorMessage;
