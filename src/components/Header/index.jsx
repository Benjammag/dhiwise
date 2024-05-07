import React from "react";
import { Button, Text, Img } from "./..";
import Link from "next/link";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center pt-2 pb-[9px] pl-[61px] pr-[169px] gap-5 md:px-5 bg-teal-700`}
    >
      <Img
        src="img_header_logo.svg"
        width={30}
        height={66}
        alt="logo image"
        className="h-[66px] w-[30px] object-contain"
      />
      <ul className="flex flex-wrap gap-[29px]">
        <li>
          <Link href="#">
            <Text size="s" as="p" className="!font-jejugothic">
              Home
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text size="s" as="p" className="!font-jejugothic">
              About Us
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text size="s" as="p" className="!font-jejugothic">
              Our Team
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text size="s" as="p" className="!font-jejugothic">
              Gallery
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text size="s" as="p" className="!font-jejugothic">
              Membership
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text size="s" as="p" className="!font-jejugothic">
              Nominate Mosque
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text size="s" as="p" className="!font-jejugothic">
              Contact Us
            </Text>
          </Link>
        </li>
      </ul>
      <Button shape="round" className="min-w-[120px] font-jejugothic">
        Donate Now
      </Button>
    </header>
  );
}
