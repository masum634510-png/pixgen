import React from 'react';
import Image from 'next/image';
import { Chip, Separator } from '@heroui/react';
import { FaHeart } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import {Button} from "@heroui/react";
import Link from 'next/link';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("http://localhost:3000/data.json")
    const photos = await res.json()

    const photo = photos.find(p => p.id == id)

    return (
        <div className='flex items-center text-center flex-col py-10 space-y-3'>
            <h2 className='text-2xl font-bold'>{photo?.title}</h2>
            <p>{photo.prompt}</p>
            <div className='relative w-8/12 mx-auto h-[300px] aspect-square '>
                <Image src={photo.imageUrl} fill alt={photo.title} className='object-cover rounded-xl' />
                <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>
            <div>
                <h2 className='text-xl font-medium'>{photo.title}</h2>
            </div>
            <div className='flex  gap-5 py-2'>
                <div className='flex items-center gap-2'>
                    <p><FaHeart /></p>
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation='vertical' />
                <div className='flex items-center gap-2'>
                    <p><IoMdDownload /></p>
                    <p>{photo.downloads}</p>
                </div>

            </div>
            <Link href={"/"}>
               <Button variant="danger">Go Home</Button>
            </Link>
        </div>
    );
};

export default PhotoDetailsPage;