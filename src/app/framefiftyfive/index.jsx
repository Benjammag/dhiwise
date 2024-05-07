"use client";
import React from "react";
import { Img } from "../../components";

export default function FrameFiftyFivePage() {
  return (
    <>
      {/* gallery section */}
      <div className="flex h-[1459px] w-full items-center bg-white-A700 bg-[url(/images/img_frame_fiftyfive.png)] bg-cover bg-no-repeat pb-[479px] pt-[828px] md:h-auto md:py-5">
        <div className="container-xs flex justify-center pl-[438px] pr-[422px] md:p-5 md:px-5">
          <div className="w-full">
            <div className="flex flex-col gap-[26px]">
              <div className="flex justify-between gap-5 sm:flex-col">
                <Img
                  src="img_image_8.png"
                  width={242}
                  height={68}
                  alt="image eight"
                  className="h-[68px] w-[46%] object-cover sm:w-full"
                />
                <Img
                  src="img_image_10.png"
                  width={216}
                  height={68}
                  alt="image ten"
                  className="h-[68px] w-[41%] object-cover sm:w-full"
                />
              </div>
              <div className="flex gap-[37px] sm:flex-col">
                <Img
                  src="img_image_7.png"
                  width={264}
                  height={58}
                  alt="image seven"
                  className="h-[58px] w-[54%] object-cover sm:w-full"
                />
                <Img
                  src="img_image_9.png"
                  width={223}
                  height={58}
                  alt="image nine"
                  className="h-[58px] w-[46%] object-cover sm:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
