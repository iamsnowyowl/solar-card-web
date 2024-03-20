'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';

// eslint-disable-next-line react/display-name,
export default function page() {
  const swiperRef = useRef<SwiperType | null>(null);
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <main className="gap-17 relative flex h-screen flex-col items-center gap-8">
      <div
        className="absolute top-0  z-[-1] h-[720px] w-[2000px] origin-right rotate-[25.72deg] rounded-full bg-gray-50"
        style={{ right: '39%' }}
      ></div>
      <div
        className="relative mt-[11vh] flex justify-center"
        style={{ width: '327px', position: 'relative' }}
      >
        <Swiper
          // ref={swiperRef}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
        >
          {/* swiper icons */}
          {/* <div className="swiper-button-prev hidden" >
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 p-2">
              <div className="relative flex h-4 w-4 flex-col items-start justify-start" />
            </div>
          </div>
          <div className="swiper-button-next hidden" >
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 p-2">
              <div className="relative flex h-4 w-4 origin-top-left rotate-180 flex-col items-start justify-start" />
            </div>
          </div> */}
          <SwiperSlide>
            <div className="flex flex-col  justify-center gap-10">
              <Image
                src="/images/Onboarding illustration-1.png"
                alt="Welcome_to_Solar"
                width={335}
                height={268}
              />
              <div className="items-starter">
                <p className="text-3xl font-bold capitalize text-black">
                  Welcome to Solar!
                </p>
                <p className="w-80 text-left text-base text-gray-400">
                  Digital Payments with crypto debit cards and IBAN accounts
                  combined with concierge services.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  justify-center gap-10">
              <Image
                src="/images/Onboarding illustration-2.png"
                alt="Crypto_Cards"
                width={335}
                height={268}
              />
              <div className="items-starter">
                <p className="text-3xl font-bold capitalize text-black">
                  Crypto Cards
                </p>
                <p className="w-80 text-left text-base text-gray-400">
                  Get your Crypto Mastercard card right now and pay by crypto
                  like in fiat across the world
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  justify-center gap-10">
              <Image
                src="/images/Onboarding illustration-3.png"
                alt="Crypto_Wallet"
                width={335}
                height={268}
              />
              <div className="items-starter">
                <p className="text-3xl font-bold capitalize text-black">
                  Crypto Wallet
                </p>
                <p className="w-80 text-left text-base text-gray-400">
                  Get your Crypto Wallet with USD, EUR, GBP, TRY, KRW Accounts
                  support and card limit at least $50 000
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center gap-10">
              <Image
                src="/images/Onboarding illustration-4.png"
                alt="Secure_Support"
                width={335}
                height={268}
              />

              <div className="items-starter">
                <p className="text-3xl font-bold capitalize text-black">
                  Full Secure & Support
                </p>
                <p className="w-80 text-left text-base text-gray-400">
                  Full-Secure Card with 2-FA and other staff, which able to
                  increase security and of course VIP Support
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex gap-[327px] absolute top-[200px]">
          <button
            onClick={goToPrevSlide}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 p-2 active:bg-neutral-100"
          ></button>
          <button
            onClick={goToNextSlide}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 p-2 active:bg-neutral-100"
          ></button>
        </div>
      </div>

      <div className="2-80 inline-flex flex-col items-start justify-start gap-10">
        <div className="inline-flex w-80 flex-col items-start justify-start gap-2">
          {/* <div className="inline-flex items-end justify-start gap-0.5">
            <div className="h-1 w-5 rounded-full bg-orange-300"></div>
            <div className="h-1 w-1 rounded-full bg-gray-200"></div>
            <div className="h-1 w-1 rounded-full bg-gray-200"></div>
            <div className="h-1 w-1 rounded-full bg-gray-200"></div>
          </div> */}
          {/* <p className="text-3xl font-bold capitalize text-black">
            Welcome to Solar!
          </p>
          <p className="w-80 text-left text-base text-gray-400">
            Digital Payments with crypto debit cards and IBAN accounts combined
            with concierge services.
          </p> */}
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <button className="justify-center self-stretch rounded-full bg-orange-400 px-24 py-4 text-base font-bold text-white shadow-xl shadow-orange-100 transition-colors active:bg-opacity-50">
            Create an account
          </button>
          <button className="justify-center self-stretch rounded-full bg-orange-50 px-24 py-4 text-base font-bold text-orange-400 active:bg-opacity-50 active:text-opacity-50">
            Sign in
          </button>
        </div>
      </div>
    </main>
  );
}

// To reduce LCP, Image must be optimized.
// This is for beta
