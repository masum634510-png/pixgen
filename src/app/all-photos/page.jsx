import PhotoCard from '@/component/PhotoCard';
import React from 'react';

const AllPhoto = async () => {
    const res = await fetch("https://pixgen-steel.vercel.app/data.json");
    const photos = await res.json()
    
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Photos</h1>
            <div className='grid grid-cols-4'>
                {
                    photos.map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhoto;