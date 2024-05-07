import React from "react";
import { Button, Text, Img, Heading } from "./..";

export default function DesktopOneUserprofile({
  mosquename = "Ratibi Mosque",
  achievedamount = "Achieved: ₦200,000",
  targetamount = "Target: ₦1,000,000",
  time1 = "1:10",
  time2 = "3:15",
  donateNow = "Donate Now",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[525px] w-full bg-white-A700 relative rounded-lg`}>
      <div className="absolute bottom-[0.00px] left-0 right-0 m-auto h-[230px] w-full rounded-lg bg-white-A700" />
      <Img
        src="img_rabtibi_mosque_1.png"
        width={480}
        height={438}
        alt="mosque image"
        className="absolute left-0 right-0 top-[0.00px] m-auto h-[438px] w-full object-cover"
      />
      <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-start gap-[13px] rounded-lg bg-white-A700 pb-[19px] pl-[51px] pr-[26px] pt-[33px] md:pl-5 sm:px-5 sm:pt-5">
        <Heading size="s" as="h3" className="!text-black-900">
          {mosquename}
        </Heading>
        <div className="flex flex-col items-start self-stretch">
          <Img
            src="img_group_56.svg"
            width={394}
            height={20}
            alt="mosque thumbnail"
            className="h-[20px] w-full md:h-auto"
          />
          <div className="relative z-[1] mt-[11px] flex flex-wrap items-center justify-between gap-5 self-stretch">
            <Text size="xs" as="p" className="self-start !text-black-900">
              {achievedamount}
            </Text>
            <Text size="xs" as="p" className="!text-black-900">
              {targetamount}
            </Text>
          </div>
          <div className="relative mt-[-4px] flex w-[77%] flex-wrap items-center justify-between gap-5 md:w-full">
            <Text size="xs" as="p" className="self-end !font-poppins !text-white-A700_cc">
              {time1}
            </Text>
            <Text size="xs" as="p" className="!font-poppins !text-white-A700_cc">
              {time2}
            </Text>
          </div>
        </div>
        <Button shape="round" className="min-w-[120px] self-end font-jejugothic">
          {donateNow}
        </Button>
      </div>
    </div>
  );
}
