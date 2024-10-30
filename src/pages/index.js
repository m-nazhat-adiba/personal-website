import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Hero } from '@/components/homepage-v2/Hero';
import { Works } from '@/components/homepage-v2/Works';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { RoughEase } from 'gsap/dist/EasePack';
import { useGSAP } from '@gsap/react';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const trackList = [
    {
      title: 'Major Crimes',
      uri: 'spotify:track:3nh5RSXnRSHWuQbOJvQr0g',
    },
    {
      title: 'I Really Wanna Stay at Your House',
      uri: 'spotify:track:7mykoq6R3BArsSpNDjFQTm',
    },
    {
      title: "Who's Ready For Tomorrow",
      uri: 'spotify:track:4mn5HdatHKN7iFGDes9G8i',
    },
  ];
  const embedRef = useRef(null);
  const trackIndexRef = useRef(0);
  const trackIdRef = useRef(trackList[0].uri);
  const worksHeaderRef = useRef(null);
  const worksHeaderRef2 = useRef(null);
  const [playback, setPlayback] = useState(false);
  const [trackId, setTrackId] = useState(trackList[0].uri);
  const [trackIndex, setTrackIndex] = useState(0);
  const trackListLength = trackList.length - 1;
  const worksTransitionText1 = 'SELECTED'.split('');
  const worksTransitionText2 = 'PROJECTS'.split('');

  // Spotify Loader
  useEffect(() => {
    const handleSpotifyIframeApiReady = (IFrameAPI) => {
      const element = embedRef.current;

      const options = {
        width: '100%',
        height: '352',
        uri: trackIdRef.current,
      };

      const callback = (EmbedController) => {
        const playbackButton = document.getElementById('playSpotify');
        playbackButton.addEventListener('click', () => {
          EmbedController.togglePlay();
        });

        EmbedController.addListener('playback_update', (e) => {
          if (e.data.duration === e.data.position) {
            if (trackIndexRef.current < trackListLength) {
              trackIndexRef.current += 1;
              trackIdRef.current = trackList[trackIndexRef.current].uri;

              EmbedController.loadUri(trackIdRef.current);
              setTrackId(trackIdRef.current);
              setTrackIndex(trackIndexRef.current);
              EmbedController.play();
            } else {
              trackIndexRef.current = 0;
              trackIdRef.current = trackList[0].uri;

              EmbedController.loadUri(trackIdRef.current);
              setTrackId(trackIdRef.current);
              setTrackIndex(0);
              EmbedController.play();
            }
          }
        });

        EmbedController.addListener('playback_update', (e) => {
          if (!e.data.isPaused && !e.data.isBuffering) {
            setPlayback(true);
          } else {
            setPlayback(false);
          }
        });
      };

      IFrameAPI.createController(element, options, callback);
    };

    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    script.onload = () => {
      window.onSpotifyIframeApiReady = handleSpotifyIframeApiReady;
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script and event listeners
      const iframeApi = document.querySelector(
        'script[src="https://open.spotify.com/embed/iframe-api/v1"]',
      );
      if (iframeApi) {
        iframeApi.remove();
      }
    };
  }, []);
  // End of spotify loader

  // Works transition anim
  useGSAP(() => {
    const headerOne = worksHeaderRef.current.querySelectorAll('div');
    const headerTwo = worksHeaderRef2.current.querySelectorAll('div');
    let tlHeaderOne = gsap.timeline({
      scrollTrigger: {
        trigger: '#works-header-1',
      },
    });
    let tlHeaderTwo = gsap.timeline({
      scrollTrigger: {
        trigger: '#works-header-2',
      },
    });

    headerOne.forEach((obj, i) => {
      gsap.set(obj.childNodes[0], {
        yPercent: -100,
      });
      gsap.set(obj.childNodes[1], {
        yPercent: -200,
      });
      tlHeaderOne.add(
        gsap.to(obj.childNodes, {
          repeat: 0,
          ease: 'none',
          yPercent: '+=200',
          delay: `0.${i}`,
        }),
        0,
      );
    });

    headerTwo.forEach((obj, i) => {
      gsap.set(obj.childNodes[0], {
        yPercent: 100,
      });
      gsap.set(obj.childNodes[1], {
        yPercent: 200,
      });
      tlHeaderTwo.add(
        gsap.to(obj.childNodes, {
          repeat: 0,
          ease: 'none',
          yPercent: '-=200',
          delay: `0.${i}`,
        }),
        0,
      );
    });

    gsap.to(tlHeaderOne, {
      progress: 1,
      duration: 2,
      ease: 'back',
      scrollTrigger: {
        trigger: '#works-header-1',
      },
    });
    gsap.to(tlHeaderTwo, {
      progress: 1,
      duration: 2,
      ease: 'back',
      scrollTrigger: {
        trigger: '#works-header-2',
      },
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parent',
        pin: true,
        scrub: 0.5,
        snap: 1,
        start: 'start start',
        end: '+=1000',
        refreshPriority: 1,
      },
    });

    tl.add('panel').to('.panel', {
      yPercent: -100,
      ease: 'none',
    });

    tl.add(
      gsap.fromTo(
        '#hero',
        { opacity: '100%' },
        {
          opacity: '50%',
          ease: 'back.out',
        },
      ),
      0,
    );
  });
  //  End of works transition anim

  // hero idle anim
  useGSAP(() => {
    gsap.from('#backdrop', {
      opacity: 0,
      ease: RoughEase.ease.config({
        template: 'circ.easeOut',
        strength: 4,
        points: 50,
        taper: 'out',
        randomize: true,
        clamp: true,
      }),
      duration: 0.8,
      repeat: -1,
      repeatDelay: 5,
    });
  });

  return (
    <>
      {/* Desktop View */}
      <main className="parent relative hidden h-full w-full flex-col overflow-x-hidden lg:flex">
        {/* NAV */}
        <nav
          id="nav"
          className="flex h-[88px] w-full items-center justify-between bg-black px-10"
        >
          <span className="w-[140px] text-sm font-semibold tracking-[.3em]">
            NAZHATMN4
          </span>
          <Image
            src={'/barcode.png'}
            height={20}
            width={80}
            alt="bar"
            className="h-auto w-20"
          />
          <div className="flex w-[140px] justify-end gap-4">
            <div
              id="playSpotify"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full hover:cursor-pointer"
            >
              <Icon
                className="z-10 h-full w-full rounded-full border-4 border-white bg-black px-[5px] text-white duration-500 group-hover:border-[#1db954] group-hover:bg-[#1db954] group-hover:text-white group-hover:duration-300"
                icon={playback ? 'mdi:music' : 'mdi:music-off'}
              />
              {/* Song title */}
              <div className="absolute right-0 flex h-full max-w-0 -translate-x-[20px] items-center overflow-hidden whitespace-nowrap rounded-s-full border-0 border-[#1db954] bg-[#1db954] px-2 duration-500 group-hover:max-w-[1440px] group-hover:border-4 group-hover:duration-300">
                <span className="truncate pr-10 text-xs text-white">
                  Powered by Spotify
                </span>
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white">
              <Icon
                className="h-auto w-full px-1"
                icon="akar-icons:three-line-horizontal"
              />
            </div>
          </div>
        </nav>

        {/* HERO */}
        <Hero playback={playback} track={trackList[trackIndex].title} />

        {/* TRANSITION */}
        <section
          id="works-transition"
          className="panel absolute top-[100vh] z-50 flex w-screen flex-col gap-4 bg-fuchsia-700 p-10 text-black"
        >
          <div id="works-header-1" className="flex w-full" ref={worksHeaderRef}>
            {worksTransitionText1.map((item, key) => (
              <div className="relative flex overflow-hidden" key={key}>
                <span className="absolute left-0 top-0 text-[200px] font-bold leading-none">
                  {item}
                </span>
                <span className="text-[200px] font-semibold leading-none">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div
            id="works-header-2"
            className="flex w-full justify-end"
            ref={worksHeaderRef2}
          >
            {worksTransitionText2.map((item, key) => (
              <div className="relative flex overflow-hidden" key={key}>
                <span className="absolute left-0 top-0 text-[200px] font-bold leading-none">
                  {item}
                </span>
                <span className="text-[200px] font-bold leading-none">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* WORKS */}
        <Works />

        {/* SKILLS */}
        <section></section>
      </main>

      {/* Mobile View */}
      <main className="flex h-screen w-screen items-center justify-center lg:hidden">
        <h1>Use Desktop for Full Experiences</h1>
      </main>

      {/* SPOTIFY WIDGET */}
      <div className="absolute z-[-99999] h-0 w-0">
        <div id="embed-iframe" ref={embedRef} />
      </div>
    </>
  );
}
