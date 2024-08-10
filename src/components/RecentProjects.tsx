import Image from "next/image";
import React from "react";
import Pill from "./views/Pill";
import Link from "next/link";

export default function RecentProjects() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Link
        target="_blank"
        href={
          "https://medium.com/@fawaznaufal23/galasin-reinvent-gobak-sodor-using-apple-technologies-25809543d8e9?source=user_profile---------0----------------------------"
        }
        className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
      >
        <Image
          className="w-full h-48 object-cover rounded-t-lg"
          src="https://picsum.photos/seed/picsum/200/300"
          width={700}
          height={600}
          loading="lazy"
          alt="This is generated image from lorem picsum"
        />
        <div className="bg-color-background-card-dark rounded-b-lg p-4">
          <h5 className="text-xl font-bold text-color-text-primary leading-140">
            Pegipegi
          </h5>
          <p className="text-base leading-140 text-color-text-primary mt-6 line-clamp-4">
            PT Go Online Destinations atau Pegipegi merupakan Online Travel
            Agent (OTA) yang menyediakan layanan perjalanan seperti hotel, tiket
            pesawat, tiket kereta, hotel, dan juga yang lainnya. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Veniam minus animi
            ipsa aperiam tempora incidunt sint, quae modi obcaecati voluptatum
            excepturi commodi id? Incidunt dicta placeat architecto ad tenetur
            corrupti.
          </p>
          <div className="flex flex-row flex-wrap items-center mt-6 gap-2">
            <Pill text="Android" />
            <Pill text="+2" />
          </div>
        </div>
      </Link>
      <Link
        href={
          "https://medium.com/@fawaznaufal23/galasin-reinvent-gobak-sodor-using-apple-technologies-25809543d8e9?source=user_profile---------0----------------------------"
        }
        className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
      >
        <Image
          className="w-full h-48 object-cover rounded-t-lg"
          src="https://picsum.photos/seed/picsum/200/300"
          width={700}
          height={600}
          loading="lazy"
          alt="This is generated image from lorem picsum"
        />
        <div className="bg-color-background-card-dark rounded-b-lg p-4">
          <h5 className="text-xl font-bold text-color-text-primary leading-140">
            Pegipegi
          </h5>
          <p className="text-base leading-140 text-color-text-primary mt-6 line-clamp-4">
            PT Go Online Destinations atau Pegipegi merupakan Online Travel
            Agent (OTA) yang menyediakan layanan perjalanan seperti hotel, tiket
            pesawat, tiket kereta, hotel, dan juga yang lainnya. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Veniam minus animi
            ipsa aperiam tempora incidunt sint, quae modi obcaecati voluptatum
            excepturi commodi id? Incidunt dicta placeat architecto ad tenetur
            corrupti.
          </p>
          <div className="flex flex-row flex-wrap items-center mt-6 gap-2">
            <Pill text="Android" />
            <Pill text="+2" />
          </div>
        </div>
      </Link>
      <Link
        href={
          "https://medium.com/@fawaznaufal23/galasin-reinvent-gobak-sodor-using-apple-technologies-25809543d8e9?source=user_profile---------0----------------------------"
        }
        className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
      >
        <Image
          className="w-full h-48 object-cover rounded-t-lg"
          src="https://picsum.photos/seed/picsum/200/300"
          width={700}
          height={600}
          loading="lazy"
          alt="This is generated image from lorem picsum"
        />
        <div className="bg-color-background-card-dark rounded-b-lg p-4">
          <h5 className="text-xl font-bold text-color-text-primary leading-140">
            Pegipegi
          </h5>
          <p className="text-base leading-140 text-color-text-primary mt-6 line-clamp-4">
            PT Go Online Destinations atau Pegipegi merupakan Online Travel
            Agent (OTA) yang menyediakan layanan perjalanan seperti hotel, tiket
            pesawat, tiket kereta, hotel, dan juga yang lainnya. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Veniam minus animi
            ipsa aperiam tempora incidunt sint, quae modi obcaecati voluptatum
            excepturi commodi id? Incidunt dicta placeat architecto ad tenetur
            corrupti.
          </p>
          <div className="flex flex-row flex-wrap items-center mt-6 gap-2">
            <Pill text="Android" />
            <Pill text="+2" />
          </div>
        </div>
      </Link>
    </div>
  );
}
