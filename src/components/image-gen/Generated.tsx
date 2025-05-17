import React from 'react'
import image1 from "../../../public/hero-images/Charismatic Young Man with a Warm Smile and Stylish Tousled Hair.jpeg"
import image2 from "../../../public/hero-images/Confident Businesswoman on Turquoise Backdrop.jpeg"
import image3 from "../../../public/hero-images/Man in Brown Suit.jpeg"
import image4 from "../../../public/hero-images/Sophisticated Businessman Portrait.jpeg"
import {Card,CardContent} from '../ui/card'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
    {
        src: image1,
        alt: "some alt1"
    },
    {
        src: image2,
        alt: "some alt2"
    },
    {
        src: image3,
        alt: "some alt3"
    },
    {
        src: image4,
        alt: "some alt4"
    },
]

const Generated = () => {

    if(images.length === 0) {
        return <Card className='w-full max-w-2xl bg-muted'>
            <CardContent className='flex aspect-square items-center justify-center p-6'>
                <span className='text-2xl'>No Images Generated</span>
            </CardContent>
        </Card>
    }

    return (
        <Carousel className="w-full max-w-2xl">
            <CarouselContent>
                {images.map((image,index) => (
                    <CarouselItem key={index}>
                        <div className="flex items-center justify-center rounded-lg overflow-hidden  aspect-square ">
                            <Image src={image.src} className='w-full h-full object-cover' alt='' />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Generated
