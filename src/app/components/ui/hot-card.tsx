import { CardContainer, CardBody, CardItem } from './3d-card';
import Link from 'next/link';
import Image from 'next/image';
import { Caesar_Dressing } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

export function Hotcard({cardTitle , cardDescription, cardImage, cardLink, className, tag} : {cardTitle: string, cardDescription: string, cardImage: string, cardLink: string, className?: string, tag?: string}) {
  return (
    <CardContainer className={twMerge("inter-var",className)}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {cardTitle}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {cardDescription}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={cardImage}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href={cardLink}
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-s font-normal dark:text-white/90"
                        >
                            {tag}
                        </CardItem>

                    </div>
                </CardBody>
            </CardContainer>
  );
}   