"use client";
import React from "react";
import { Button, Text, Input, Heading, Img } from "../../components";
import DesktopOneMissionsection from "../../components/DesktopOneMissionsection";
import DesktopOneUserprofile from "../../components/DesktopOneUserprofile";
import Header from "../../components/Header";

const data = [
  { transparencyText: "Transparency" },
  { transparencyText: "Empathy" },
  { transparencyText: "Determination" },
  { transparencyText: "Faith in God" },
  { transparencyText: "Team Work" },
];

export default function DesktopOnePage() {
  return (
    <>
      {/* main layout section */}
      <div className="flex w-full flex-col bg-white-A700">
        {/* header section */}
        <div className="container-xs md:p-5">
          {/* navigation bar section */}
          <Header />

          {/* welcome section */}
          <div className="h-[633px] bg-black-900 bg-[url(/images/img_frame_3.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="flex justify-center bg-black-900_b5 px-14 pb-[154px] pt-64 md:p-5">
              <div className="flex flex-col items-center gap-[31px]">
                <Text size="2xl" as="p" className="!font-jejugothic">
                  Welcome to Masjid 1001
                </Text>
                <Text size="xl" as="p" className="!font-jejugothic">
                  We revamp and rebuild the house of Allah.
                </Text>
                <Button color="teal_700" shape="round" className="min-w-[215px] font-jejugothic sm:px-5">
                  Become a Member
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="container-xs md:p-5">
          {/* mission statement section */}
          <div className="flex items-center justify-between gap-5 bg-gray-100 pr-[107px] md:flex-col md:pr-5">
            <div className="relative h-[650px] w-[47%] md:w-full">
              <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-max w-[63%] bg-teal-700">
                <Img
                  src="img_group.svg"
                  width={378}
                  height={650}
                  alt="group image"
                  className="h-[650px] w-full md:h-auto"
                />
              </div>
              <Img
                src="img_frame_6.png"
                width={548}
                height={466}
                alt="frame image"
                className="absolute right-[0.00px] top-[12%] m-auto h-[466px] w-[91%] rounded object-cover"
              />
            </div>
            <div className="flex w-[46%] flex-col gap-4 md:w-full">
              <Heading as="h1" className="w-[85%] leading-[58px] md:w-full">
                Welcome to the Masjid 1001
              </Heading>
              <div className="relative h-[388px] md:h-auto">
                <Text size="md" as="p" className="w-full leading-[125%] !text-black-900">
                  This is an idea borne out of the need to bring value to hearts, minds and souls. The idea was
                  conceived to make the spiritual well-being of Muslims become better endeared to going to the mosque to
                  pray. We know so many Muslims who will either combine their prayers intentionally or leave their
                  prayers unsaid just because the mosque around them either does not have potable water, good
                  structures, clean rest rooms or lack of one amenity that a mosque should have or the other.
                </Text>
                <Button
                  shape="round"
                  className="absolute bottom-[26.00px] left-[0.00px] m-auto min-w-[179px] font-jejugothic"
                >
                  Nominate Mosque
                </Button>
              </div>
            </div>
          </div>

          {/* values and mantra section */}
          <div className="flex gap-6 bg-gray-200 px-9 py-[50px] md:flex-col md:py-5 sm:p-5">
            {[...Array(2)].map((d, index) => (
              <DesktopOneMissionsection
                missionimage="img_frame.svg"
                missiontext="Our Mission"
                missiondescript="To become a world class Islamic non-governmental organisation that is known for revamping mosques across Nigeria to the benefit of humanity."
                key={"missionList" + index}
                className="justify-center px-[53px] pb-[82px] pt-[53px] md:w-full md:p-5"
              />
            ))}
          </div>
        </div>

        {/* projects section */}
        <div className="container-xs md:p-5">
          <div className="flex flex-col items-center justify-center bg-gray-100 px-14 pb-[99px] pt-[63px] md:p-5">
            <Heading size="md" as="h2">
              Explore our Projects
            </Heading>
            <Text size="md" as="p" className="mt-3 !text-black-900">
              Join hands with us to accomplish our ongoing projects{" "}
            </Text>
            <div className="mt-[61px] flex w-[79%] gap-11 md:w-full md:flex-col">
              {[...Array(2)].map((d, index) => (
                <DesktopOneUserprofile
                  mosquename="Ratibi Mosque"
                  achievedamount="Achieved: ₦200,000"
                  targetamount="Target: ₦1,000,000"
                  time1="1:10"
                  time2="3:15"
                  donateNow="Donate Now"
                  key={"profileList" + index}
                />
              ))}
            </div>
          </div>
          <div className="flex bg-gray-100">
            <div className="flex w-[92%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
              <div className="relative h-[650px] w-[47%] md:w-full">
                <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-max w-[63%] bg-teal-700">
                  <Img
                    src="img_group.svg"
                    width={378}
                    height={650}
                    alt="group image"
                    className="h-[650px] w-full md:h-auto"
                  />
                </div>
                <Img
                  src="img_frame_6.png"
                  width={548}
                  height={466}
                  alt="frame image"
                  className="absolute right-[0.00px] top-[12%] m-auto h-[466px] w-[91%] rounded object-cover"
                />
              </div>
              <div className="flex w-[46%] flex-col gap-4 md:w-full">
                <Heading as="h2" className="w-[85%] leading-[58px] md:w-full">
                  Welcome to the Masjid 1001
                </Heading>
                <div className="relative h-[388px] md:h-auto">
                  <Text size="md" as="p" className="w-full leading-[125%] !text-black-900">
                    This is an idea borne out of the need to bring value to hearts, minds and souls. The idea was
                    conceived to make the spiritual well-being of Muslims become better endeared to going to the mosque
                    to pray. We know so many Muslims who will either combine their prayers intentionally or leave their
                    prayers unsaid just because the mosque around them either does not have potable water, good
                    structures, clean rest rooms or lack of one amenity that a mosque should have or the other.
                  </Text>
                  <Button
                    shape="round"
                    className="absolute bottom-[26.00px] left-[0.00px] m-auto min-w-[179px] font-jejugothic"
                  >
                    Nominate Mosque
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* core values section */}
        <div className="container-xs md:p-5">
          <div className="h-[856px] bg-gray-200 bg-[url(/images/img_frame_8.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="flex flex-col items-center gap-[72px] bg-black-900_b5 px-14 pb-10 pt-[68px] md:gap-[54px] md:px-5 md:pt-5 sm:gap-9 sm:p-5">
              <Heading as="h2" className="!text-white-A700">
                Our Core Values
              </Heading>
              <div className="flex w-[83%] gap-[70px] md:w-full md:flex-col">
                {data.map((d, index) => (
                  <div key={"valuesList" + index} className="flex flex-1 flex-col items-center gap-10">
                    <div className="h-[140px] w-[82%] rounded-[70px] bg-amber-600" />
                    <Text as="p">{d.transparencyText}</Text>
                  </div>
                ))}
              </div>
              <div className="flex w-[66%] gap-[86px] md:w-full md:flex-col">
                <div className="flex flex-1 flex-col items-center gap-[35px]">
                  <div className="h-[140px] self-stretch rounded-[70px] bg-amber-600" />
                  <Text as="p">Trust</Text>
                </div>
                <div className="mb-2.5 flex flex-1 flex-col items-center gap-[38px] md:mb-0">
                  <div className="h-[140px] self-stretch rounded-[70px] bg-amber-600" />
                  <Text as="p">Honesty</Text>
                </div>
                <Text as="p" className="w-[24%] text-center leading-[109.5%] md:w-full">
                  Service to Humanity
                </Text>
                <div className="h-[140px] flex-1 rounded-[70px] bg-amber-600" />
                <div className="flex w-[21%] flex-col items-center gap-[37px] md:w-full">
                  <div className="h-[140px] w-[78%] rounded-[70px] bg-amber-600" />
                  <Text as="p">Accountability</Text>
                </div>
              </div>
              <Button color="teal_700" shape="round" className="min-w-[179px] font-jejugothic !text-gray-100">
                Nominate Mosque
              </Button>
            </div>
          </div>

          {/* mission and vision section */}
          <div className="bg-gray-100 pr-[58px] md:pr-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="h-[929px] w-[38%] bg-teal-700 bg-[url(/images/img_frame_8_white_a700.png)] bg-cover bg-no-repeat md:h-auto md:w-full">
                <Img
                  src="img_image_5.png"
                  width={498}
                  height={929}
                  alt="mission image"
                  className="h-[929px] w-full object-cover md:h-auto"
                />
              </div>
              <div className="flex w-[57%] flex-col items-start gap-5 md:w-full">
                <Heading as="h2">Our Mission</Heading>
                <Text size="md" as="p" className="w-full leading-[125%] !text-black-900">
                  <>
                    To make praying in the mosque attractive, healthy, and accommodating for worshippers through the
                    provision of a more conducive mosque environment. We also want to help ease the burden of mosque
                    managers by supporting them to reach their goal of getting more Muslims to see the worship place as
                    a safe haven where they can conveniently worship Allah SWT and earn more rewards. We also want to
                    erase the stereotypic belief of illiteracy and dirtiness that has been attached to the deen by
                    ensuring that mosques across Nigeria maintain a standard of basic amenities.
                    <br />
                    <br />
                    To make praying in the mosque attractive, healthy and accommodating for worshippers through the
                    provision of a more conducive mosque environment. We also want to help ease the burden of mosque
                    managers by supporting them to reach their goal of getting more muslims to see the worship place as
                    a safe haven where they can conveniently worship Allah SWT and earn more rewards. We also want to
                    erase the stereotypic belief of illiteracy and dirtiness that has been attached to the deen by
                    ensuring that mosques across Nigeria maintain a standard of basic amenities.
                  </>
                </Text>
                <Button shape="round" className="min-w-[106px] font-jejugothic sm:px-5">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          {/* gallery section */}
          <div className="flex justify-center bg-gray-200 px-14 py-[62px] md:p-5">
            {/* newsletter subscription section */}
            <div className="flex w-[85%] items-center justify-between gap-5 md:w-full md:flex-col">
              <div className="w-[29%] md:w-full">
                <div className="flex items-center">
                  <Img
                    src="img_rectangle.png"
                    width={72}
                    height={126}
                    alt="main image"
                    className="relative z-[8] mb-6 h-[126px] w-[19%] self-end object-cover"
                  />
                  <div className="relative ml-[-66px] flex flex-1 items-center">
                    <div className="relative h-[334px] flex-1">
                      <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-[96%] items-start">
                        <div className="flex flex-1 items-start">
                          <Img
                            src="img_rectangle_53x30.png"
                            width={30}
                            height={53}
                            alt="thumbnail image"
                            className="mt-[117px] h-[53px] w-[12%] object-cover"
                          />
                          <div className="relative h-[309px] flex-1 md:h-auto">
                            <Img
                              src="img_rectangle_309x230.png"
                              width={230}
                              height={309}
                              alt="feature image"
                              className="h-[309px] w-full object-cover"
                            />
                            <div className="absolute left-0 right-0 top-[16%] m-auto flex w-[56%] flex-col items-center">
                              <Img
                                src="img_rectangle_11x84.png"
                                width={84}
                                height={11}
                                alt="vertical image"
                                className="h-[11px] w-[66%] object-cover"
                              />
                              <Img
                                src="img_rectangle_7x129.png"
                                width={129}
                                height={7}
                                alt="tall image"
                                className="mt-[19px] h-[7px] w-full object-cover"
                              />
                              <Img
                                src="img_rectangle_1.png"
                                width={129}
                                height={7}
                                alt="small image"
                                className="mt-3 h-[7px] w-full object-cover"
                              />
                              <Img
                                src="img_rectangle_2.png"
                                width={129}
                                height={7}
                                alt="medium image"
                                className="mt-3 h-[7px] w-full object-cover"
                              />
                              <Img
                                src="img_rectangle_7x78.png"
                                width={78}
                                height={7}
                                alt="wide image"
                                className="mt-3 h-[7px] w-[61%] self-start object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          src="img_rectangle_3.png"
                          width={30}
                          height={53}
                          alt="banner image"
                          className="relative z-[3] mt-[117px] h-[53px] w-[11%] object-cover"
                        />
                      </div>
                      <Img
                        src="img_rectangle_169x126.png"
                        width={126}
                        height={169}
                        alt="ad image"
                        className="absolute bottom-[9.99px] right-[0.48px] z-[4] m-auto h-[169px] w-[42%] object-cover"
                      />
                      <Img
                        src="img_rectangle_4.png"
                        width={126}
                        height={169}
                        alt="promo image"
                        className="absolute bottom-[9.99px] left-[0.00px] m-auto h-[169px] w-[42%] object-cover"
                      />
                      <div className="absolute bottom-[0.76px] left-0 right-0 z-[5] m-auto flex w-[92%] flex-col items-center">
                        <Img
                          src="img_rectangle_26x130.png"
                          width={130}
                          height={26}
                          alt="portrait image"
                          className="relative z-[6] h-[26px] w-[47%] object-cover"
                        />
                        <Img
                          src="img_rectangle_154x277.png"
                          width={277}
                          height={154}
                          alt="landscape image"
                          className="relative mt-[-25px] h-[154px] w-full object-cover md:h-auto"
                        />
                      </div>
                    </div>
                    <Img
                      src="img_rectangle_126x72.png"
                      width={72}
                      height={126}
                      alt="hero image"
                      className="relative z-[7] mb-6 ml-[-63px] h-[126px] w-[19%] self-end object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[57%] flex-col items-start gap-6 pb-[25px] md:w-full sm:pb-5">
                <Heading size="xl" as="h2" className="w-[64%] leading-[60px] !text-black-900 md:w-full">
                  <>
                    Subscribe to our
                    <br />
                    Newsletter!
                  </>
                </Heading>
                <Text size="md" as="p" className="w-[60%] leading-[29px] !text-gray-500 md:w-full">
                  Be the first to get exclusive offers ands the latest news
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder={`Enter your email address`}
                  className="w-[90%]"
                />
                <Button color="teal_700" size="md" className="min-w-[556px] rounded-lg font-bold sm:px-5">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* contact info section */}
          <div className="flex justify-center bg-gray-100 p-[38px] sm:p-5">
            <Text size="s" as="p" className="w-[64%] text-center leading-5 !text-black-900">
              <>
                Suite 23, Wing C, Millenium Plaza, Herbert Macaulay Way, Central Business District, Abuja.+234 701 503
                5353
                <br />
                info@masjid1001.ng
              </>
            </Text>
          </div>

          {/* footer section */}
          <Button color="black_900" size="sm" shape="square" className="w-full sm:px-5">
            © Masjid 1001 Initiative. All Rights Reserved.
          </Button>
        </div>
      </div>
    </>
  );
}
