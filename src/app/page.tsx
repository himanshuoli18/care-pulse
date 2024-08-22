'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Home() {
  useGSAP(() => {
    gsap.to(".rotate-loop", {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
      yoyo: false
    })
  })
  useGSAP(() => {
    gsap.from(".complete-text", {
      y: 30
    })
  })
  useGSAP(() => {
    gsap.from(".hero-images", {
      y: -50
    })
  })
  return (
    <div className='complete-text'>
      <MaxWidthWrapper className='mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='relative group'>
          <div className="absolute -inset-1 bg-gradient-to-tr from-rose-600 to-purple-900 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className='mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all'>
            <Image
              src='/LandingPage/protection.png'
              alt='Health check Image'
              height={40}
              width={40}
              className='rotate-loop'
            />
            <p className='text-md font-bold text-gray-700'>
              CarePulse is now public!
            </p>
          </div>
        </div>
        <h1 className='mt-12 max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Book appointments with your{' '}
          <span className='bg-gradient-to-tr from-rose-600 via-purple-700 to-indigo-900 text-transparent bg-clip-text'>doctor</span>{' '}
          in seconds.
        </h1>
        <p className='my-5 max-w-prose text-zinc-700 sm:text-lg'>
          CarePulse allows you to book appointments with any
          doctor. Simply upload your details and choose your
          doctor.
        </p>
        <div className="relative group inline-block">
          <div className="absolute blur group-hover:opacity-70 group-hover:scale-105 bg-gradient-to-tr -inset-1 top-0 transition duration-200 left-0 w-full mt-10 h-12 from-rose-600 via-fuchsia-700 to-violet-700 bg-opacity-50 backdrop-blur-3xl z-0"></div>
          <div className="relative z-10 rounded-md">
            <Link target='_blank' href='/patient-form'>
              <button className="font-bold mt-10 inline-flex h-12 animate-shimmer items-center justify-center bg-[linear-gradient(30deg,#12191B,45%,#1e2631,55%,#12191B)] bg-[length:200%_100%] px-6 text-white-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/LandingPage/hero-lines-1.png"
                height={3000}
                width={3000}
                alt="Hero Lines 1"
                className="absolute -translate-x-full hero-images"
                style={{ top: -200, left: 400 }}
              />
              <Image
                src="/LandingPage/hero-lines-2.png"
                height={3000}
                width={3000}
                alt="Hero Lines 2"
                className="absolute translate-x-full hero-images"
                style={{ top: 0, right: 300 }}
              />
            </div>
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 mt-16 flow-root sm:mt-24">
              <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src="/LandingPage/dashboard-preview.jpg"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                priority={true}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
              </div>
            </div>
          </div>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Get appointments in minutes
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Getting appointments with your doctor has never been
              easier than with CarePulse.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-md font-bold text-rose-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Either starting out with a free plan or
                choose our{' '}
                <Link
                  href='/pricing'
                  className='text-rose-600 underline underline-offset-2'>
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-md font-bold text-rose-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload your PDF file
              </span>
              <span className='mt-2 text-zinc-700'>
                We&apos;ll process your file and make it
                ready for you to chat with.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-md font-bold text-rose-600'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-700'>
                It&apos;s that simple. Try out Quill today -
                it really takes less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/LandingPage/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                priority={true}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}