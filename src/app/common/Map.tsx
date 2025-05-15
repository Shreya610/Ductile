import React from "react";

interface IProps {
  src: string;
}

const Map = (props: IProps) => {
  const { src } = props;
  return (
    <iframe
      src={src}
      loading="lazy"
      className="w-[100vw] md:w-full col-span-2 mx-auto  h-[530px] mt-10"
    ></iframe>
  );
};

export default Map;
