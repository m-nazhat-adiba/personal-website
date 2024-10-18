import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ProfileFrame } from "@/components/assets/svg/ProfileFrame";
import { Icon } from "@iconify/react";
import worksData from "@/dummy_data/works";
import gsap from "gsap";
import { SkillCard } from "@/components/common/cards/SkillCard";

export default function Home() {
  const trackList = [
    {
      title: "Major Crimes",
      uri: "spotify:track:3nh5RSXnRSHWuQbOJvQr0g",
    },
    {
      title: "I Really Wanna Stay at Your House",
      uri: "spotify:track:7mykoq6R3BArsSpNDjFQTm",
    },
    {
      title: "Who's Ready For Tomorrow",
      uri: "spotify:track:4mn5HdatHKN7iFGDes9G8i",
    },
  ];

  const embedRef = useRef(null);
  const trackIndexRef = useRef(0); // Ref to keep track of the current trackIndex
  const trackIdRef = useRef(trackList[0].uri); // Ref to keep track of the current trackId
  const [playback, setPlayback] = useState(false);
  const [trackId, setTrackId] = useState(trackList[0].uri);
  const [trackIndex, setTrackIndex] = useState(0);
  const [porto, setPorto] = useState(worksData[2]);
  const trackListLength = trackList.length - 1;

  const wiggleParallax = (e, target, movement) => {
    const container = document.getElementById("room");
    if (!container) return;

    const relX = e.pageX - container.offsetLeft;
    const relY = e.pageY - container.offsetTop;

    gsap.to(target, {
      duration: 1,
      x:
        ((relX - container.offsetWidth / 2) / container.offsetWidth) * movement,
      y:
        ((relY - container.offsetHeight / 2) / container.offsetHeight) *
        movement,
    });
  };

  useEffect(() => {
    const container = document.getElementById("room");
    if (!container) return;

    const handleMouseMove = (e) => {
      wiggleParallax(e, "#ui-slide", -100);
      wiggleParallax(e, "#room-bg", -30);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleSpotifyIframeApiReady = (IFrameAPI) => {
      const element = embedRef.current;

      const options = {
        width: "100%",
        height: "352",
        uri: trackIdRef.current, // Use the track ID ref directly
      };

      const callback = (EmbedController) => {
        const playbackButton = document.getElementById("playSpotify");
        playbackButton.addEventListener("click", () => {
          EmbedController.togglePlay();
        });

        // Listen for the playback update to loop the track
        EmbedController.addListener("playback_update", (e) => {
          if (e.data.duration === e.data.position) {
            if (trackIndexRef.current < trackListLength) {
              // Update refs instead of state to reflect the latest value
              trackIndexRef.current += 1;
              trackIdRef.current = trackList[trackIndexRef.current].uri;

              EmbedController.loadUri(trackIdRef.current); // Use updated trackIdRef
              setTrackId(trackIdRef.current); // Update state if needed
              setTrackIndex(trackIndexRef.current);
              EmbedController.play();
            } else {
              // Reset to the first track
              trackIndexRef.current = 0;
              trackIdRef.current = trackList[0].uri;

              EmbedController.loadUri(trackIdRef.current); // Use updated trackIdRef
              setTrackId(trackIdRef.current); // Update state if needed
              setTrackIndex(0);
              EmbedController.play();
            }
          }
        });

        EmbedController.addListener("playback_update", (e) => {
          if (!e.data.isPaused && !e.data.isBuffering) {
            setPlayback(true);
          } else {
            setPlayback(false);
          }
        });
      };

      IFrameAPI.createController(element, options, callback);
    };

    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    script.onload = () => {
      window.onSpotifyIframeApiReady = handleSpotifyIframeApiReady;
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script and event listeners
      const iframeApi = document.querySelector(
        'script[src="https://open.spotify.com/embed/iframe-api/v1"]'
      );
      if (iframeApi) {
        iframeApi.remove();
      }
    };
  }, []);

  return (
    <main id="autoplay" className="flex flex-col w-full overflow-x-hidden">
      {/* NAV */}
      <nav className="px-10 h-[88px] w-full bg-black flex items-center justify-between">
        <span className="text-sm font-semibold tracking-[.3em] w-[140px]">
          NAZHATMN4
        </span>
        <Image
          src={"/barcode.png"}
          height={20}
          width={80}
          alt="bar"
          className="w-20 h-auto"
        />
        <div className="w-[140px] flex justify-end gap-4">
          <div
            id="playSpotify"
            className="relative w-10 h-10 flex items-center rounded-full justify-center group hover:cursor-pointer"
          >
            <Icon
              className="w-full h-full bg-black border-4 border-white rounded-full px-[5px] group-hover:text-white group-hover:bg-[#1db954] group-hover:border-[#1db954]  group-hover:duration-300 duration-500 text-white z-10"
              icon={playback ? "mdi:music" : "mdi:music-off"}
            />
            {/* Song title */}
            <div className="absolute right-0 max-w-0 h-full -translate-x-[20px] rounded-s-full bg-[#1db954] border-0 border-[#1db954] group-hover:border-4 group-hover:max-w-[1440px] group-hover:duration-300 duration-500 items-center flex overflow-hidden whitespace-nowrap px-2">
              <span className="text-xs text-white truncate pr-10">
                Powered by Spotify
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center">
            <Icon
              className="w-full h-auto px-1"
              icon="akar-icons:three-line-horizontal"
            />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-10 w-full h-[calc(100vh_-_88px)]">
        {/* backdrop */}
        <div className="w-full h-auto relative">
          {/* title */}
          <div className="absolute top-[9%] z-10 flex flex-col gap-5">
            <h1 className="text-white text-[32px] leading-tight font-semibold w-[576px]">
              SHAPING DIGITAL EXPERIENCES WITH PASSION AND EXPERTISE
            </h1>
            <span className="text-white text-base font-[300]">
              A Portfolio Page
            </span>
          </div>
          {/* skills */}
          <div className="absolute h-1/2 flex flex-col gap-6 bottom-0 left-[1%] justify-center">
            <div className="w-[65px] h-[65px] rounded-full bg-fuchsia-700">
              <Icon
                className="w-full h-auto p-2 text-black"
                icon="nonicons:next-16"
              />
            </div>
            <div className="w-[65px] h-[65px] rounded-full bg-fuchsia-700">
              <Icon
                className="w-full h-auto p-3 text-black"
                icon="nonicons:typescript-16"
              />
            </div>
            <div className="w-[65px] h-[65px] rounded-full bg-fuchsia-700">
              <Icon
                className="w-full h-auto text-black p-2"
                icon="nonicons:react-16"
              />
            </div>
          </div>
          {/* social */}
          <div className="absolute top-0 right-[2%] flex flex-col gap-8 h-1/2 justify-center text-white">
            <Icon className="w-7 h-auto" icon="akar-icons:linkedin-fill" />
            <Icon className="w-7 h-auto" icon="akar-icons:github-fill" />
            <Icon className="w-7 h-auto" icon="akar-icons:envelope" />
          </div>
          {/* profile */}
          <div className="absolute bottom-0 right-[6%] z-[2]">
            <div className="w-[380px] h-[380px]">
              <ProfileFrame
                className="text-transparent w-full h-full"
                gradientColors={["#3C3D37", "transparent"]}
                gradientOpacity={[0.8, 0]}
              />
              <Image
                src={"/image/profile.jpg"}
                height={200}
                width={200}
                alt="profile"
                className={clsx(
                  "absolute top-[14%] left-[14%] h-[160px] w-[160px] rounded-full",
                  playback ? "animate-spin-slow" : "animate-none"
                )}
              />
            </div>
            <div className="absolute bottom-[15%] left-[50%] flex flex-col">
              <span className="text-[20px] leading-normal font-medium mb-1">
                NAZHAT ADIBA
              </span>
              <span className="text-xs">frontend developer</span>
              <span className="text-[10px]">indonesia</span>
            </div>
          </div>
          {/* backdrop */}
          <figure className="flex px-24 w-full h-[calc(100vh_-_176px)] justify-center -z-50">
            <div className="relative w-full h-full flex items-center justify-between ">
              <div className="absolute inset-0 bg-[url('/image/backdrop.png')] border-2 border-black bg-cover bg-center z-[-1] pulsing-effect" />
              <Image
                src={"/svg/frame-l.svg"}
                width={1440}
                height={900}
                alt="backdrop"
                priority={false}
                className="w-auto h-full object-cover"
              />
              <Image
                src={"/svg/frame-r.svg"}
                width={1440}
                height={900}
                alt="backdrop"
                priority={false}
                className="w-auto h-full object-cover"
              />
            </div>
          </figure>

          {playback && (
            <div className="absolute right-0 bottom-0 flex flex-col items-end">
              <span className="text-[10px] text-gray-300">Now Playing</span>
              <span className="text-xs">{trackList[trackIndex].title}</span>
            </div>
          )}
        </div>
        {/* foot */}
        <div className="relative h-[88px] w-full bg-black flex items-center justify-center">
          <span className="text-sm tracking-[.25em]">scroll to learn more</span>
        </div>
      </section>

      {/* WORKS */}
      <section
        id="room"
        className="relative h-screen w-screen flex justify-center overflow-hidden"
      >
        {/* bg */}
        <div className="relative h-full w-screen flex items-center">
          <Image
            id="room-bg"
            src={"/image/bg-works.jpg"}
            height={900}
            width={1440}
            alt="works"
            className="absolute h-auto w-full object-center object-cover"
          />
        </div>
        {/* content */}
        <div
          id="ui-slide"
          className="w-auto h-full absolute origin-center flex flex-col justify-center items-center"
        >
          <div className="flex lg:w-2/3 w-[80%] gap-2">
            <span className="h-full w-4 bg-white skew-x-12 shadow-lg shadow-white" />
            <span className="h-full w-4 bg-white skew-x-12 shadow-lg shadow-white" />
            <span className="h-full w-4 bg-white skew-x-12 shadow-lg shadow-white" />
            <span className="text-end justify-start flex text-3xl [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-white ml-4 font-semibold">
              MY WORKS
            </span>
          </div>
          <div className="flex flex-row-reverse gap-8 lg:w-2/3 w-[80%] h-auto mt-4 items-start justify-center">
            {/* preview */}
            <div
              className="h-full flex items-center w-[60%] flex-col justify-start"
              //   style={{ perspective: "600px" }}
            >
              <div
                className="w-full"
                // style={{
                //   transformStyle: "preserve-3d",
                //   transform: "rotateY(-25deg)",
                // }}
              >
                <span className="w-full text-start justify-start flex text-xl [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-white">
                  PREVIEW
                </span>
                <span className="flex mb-2 h-1 w-full bg-white shadow-xl rounded-full shadow-white "></span>
                <Image
                  src={porto.src}
                  height={450}
                  width={800}
                  alt={porto.title}
                  className="w-full h-auto opacity-80 shadow-lg shadow-white"
                />
              </div>
            </div>
            {/* brief */}
            <div className="flex flex-col h-auto w-[40%] z-10 justify-start">
              <span className="w-full text-start justify-start flex text-xl [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-white">
                BRIEF
              </span>
              <span className="flex mb-2 h-1 w-full bg-white shadow-xl rounded-full shadow-white "></span>
              <div className="h-auto w-full flex flex-col justify-start bg-black bg-opacity-50 pt-8 pb-12 px-8 rounded-lg">
                <span className="text-xs">TITLE</span>
                <h1 className="text-3xl mb-5">{porto.title.toUpperCase()}</h1>
                <span className="text-xs">DESC</span>
                <p className="text-lg">{porto.desc}</p>
              </div>
              <div className="flex flex-col mt-4 w-full h-auto gap-4 px-8">
                <span className="text-xs [text-shadow:_1px_0_10px_var(--tw-shadow-color)] shadow-white">
                  STACKS
                </span>
                <div className="grid grid-cols-5 gap-3 w-full">
                  {porto.tags.map((item, key) => (
                    <SkillCard data={item} key={key} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section></section>

      {/* HIDDEN */}
      <div className="h-0 w-0">
        <div id="embed-iframe" ref={embedRef} />
      </div>
    </main>
  );
}
