import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button, buttonVariants } from "@/components/ui/button";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { eventDetails, getDate, getDay, getMonth, getTime, getYear } from "@/lib/utils";
import { Contact, Flower, HandHeartIcon, HomeIcon, Mail, MapPinIcon, MessageSquareQuote, PhoneOff, Tally1Icon, TimerOff } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    
   <MaxWidthWrapper className='mb-20 mt-12 p-3 sm:mt-30 flex flex-col items-center justify-center text-center'>
      
    <p>In Loving Memory</p>
      <Image 
        alt="image"
        width={192}
        height={192}
        src='https://images.unsplash.com/photo-1709038459444-6f0f65994fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMzQ0NDUxNQ&ixlib=rb-4.0.3&q=80&w=1080'
        quality={100}
        className="rounded-full h-24 w-24 object-cover my-5 border-[0.35rem] border-white shadow-xl"
      />
      <h1 className='max-w-4xl text-5xl font-bold my-2 md:text-6xl lg:text-7xl'>
        {eventDetails.event.title}{' '}
      </h1>

      <h3 className="mt-5 max-w-prose dark:text-gray-300 text-zinc-700 sm:text-lg">{eventDetails.event.details.description}</h3>
      
      <div className="flex gap-2 items-center mt-10">
        <p className="text-2xl md:text-3xl">{getDay(eventDetails.event.date)}</p>
        <Tally1Icon className="h-8 w-8" />
        <div className="mb-2 mr-3">
          <p className="text-sm sm:text-2xl md:text-3xl">{getMonth(eventDetails.event.date)}</p>
          <p className="text-3xl md:text-5xl">{getDate(eventDetails.event.date)}</p>
        </div>
        <Tally1Icon className="h-8 w-8" />
        <p className="text-1xl md:text-2xl">FROM {getTime(eventDetails.event.startTime)}</p>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-1 justify-center">
          <HomeIcon className="w-4 h-4 text-green-400" />
          <p className="text-muted-foreground">{eventDetails.event.location.venue}</p>
        </div>
        <div className="flex items-center gap-1"> 
          <MapPinIcon className='w-4 h-4 text-red-400'/>
          <p className="text-muted-foreground">{eventDetails.event.location.address}</p>
        </div>

        <div className="flex items-center gap-1 justify-center"> 
          <TimerOff className='w-4 h-4 text-red-400'/>
          <p className="text-muted-foreground">Deadline: {eventDetails.event.rsvp.deadline}</p>
        </div>
      </div>

      <div className="px-29">
        <Button
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5 w-full'
          })}
        >
          <MessageSquareQuote className="h-4 w-4 mr-2" />
          RSVP</Button>
      </div>
   </MaxWidthWrapper>

    <div className="bg-primary p-8 w-full">
      <MaxWidthWrapper className="mt-12">
          <div className="flex-col flex md:flex-row justify-between">
            <div>
              <h1 className="max-w-4xl text-3xl font-bold my-2 md:text-6xl lg:text-7xl text-white">The Details</h1>
              <p className="max-w-prose mb-6 md:mb-1 text-gray-300 flex items-center gap-1"><Mail className="w-4 h-4 text-green-400" /> {eventDetails.event.rsvp.email}</p>
              <p className="text-muted-foreground">{eventDetails.event.rsvp.additionalNotes}</p>
            </div>
            
            <div>
              <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {eventDetails.event.details.additionalInformation.map((info, index) => (
                    <li key={index} className="mb-10 ms-6">            
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                          <HandHeartIcon className="w-4 h-4 text-primary" />
                      </span>
                      <h3 className="font-medium text-white leading-tight">{info.title}</h3>
                      <p className="text-sm max-w-[500px]">{info.description}</p>
                    </li>
                ) )}
              </ol>
            </div>

          </div>

          <InfiniteMovingCardsDemo />
          
      </MaxWidthWrapper>
    </div>

    <MaxWidthWrapper className='mb-20 mt-12 p-3 sm:mt-30 flex flex-col items-center justify-center text-center'>
      <h1 className="max-w-4xl text-3xl font-bold my-2 md:text-6xl lg:text-7xl">You will forever be in our hearts</h1>
      <p className="mt-1 max-w-prose dark:text-gray-300 text-zinc-700 sm:text-lg flex items-center gap-1"><Contact className="w-4 h-4 text-green-400" /> {eventDetails.event.host}</p>
      <LayoutGridDemo/>
    </MaxWidthWrapper>

    <div className="bg-primary p-8 w-full">
      <MaxWidthWrapper className="mt-12">
        <div className="flex-col flex md:flex-row items-center justify-between">
          <div>
            <h1 className="max-w-4xl text-3xl font-bold my-2 md:text-6xl lg:text-7xl text-white">Kindly RSVP</h1>
            <iframe
              title="Google Map Location"
              src="https://maps.google.com/maps?q=5678+Peaceful+Lane,Springfield&output=embed"
              width="100%"
              height="300"
              style={{ filter: 'invert(90%) hue-rotate(180deg)', border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
         
          <div>
            <p className="sm:text-lg max-w-prose text-white">The favour of your response is requested by {`${getDate(eventDetails.event.rsvp.deadline)} ${getMonth(eventDetails.event.rsvp.deadline)} ${getYear(eventDetails.event.rsvp.deadline)}`}</p>
            <Button className={buttonVariants({
            size: 'lg',
            variant: 'secondary',
            className: 'mt-5 w-full'
          })}>
            <MessageSquareQuote className="h-4 w-4 mr-2" />
            RSVP
          </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
   </>
  );
}
