import React from 'react';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Chip, Separator } from '@heroui/react';

const PhotoCard = ({ photo }) => {


    return (
        <div className='border rounded-md p-4'>
            <div className='relative w-full aspect-square'>
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
            <div>
                <button className='btn rounded-full py-1.5 text-white bg-purple-500 font-medium  w-full'>View</button>
            </div>

        </div>
    );
};

export default PhotoCard;