import React from "react";
import { Text, Heading, Img } from "./..";

export default function DesktopOneMissionsection({
  missionimage = "img_frame.svg",
  missiontext = "Our Mission",
  missiondescript = "To become a world class Islamic non-governmental organisation that is known for revamping mosques across Nigeria to the benefit of humanity.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full bg-white-A700 rounded-lg`}>
      <Img src={missionimage} width={65} height={79} alt="mission image" className="h-[79px] w-[12%]" />
      <Heading size="xs" as="h4" className="mt-[15px]">
        {missiontext}
      </Heading>
      <Text size="md" as="p" className="mt-6 w-[91%] text-center leading-[125%] !text-black-900 md:w-full">
        {missiondescript}
      </Text>
    </div>
  );
}
