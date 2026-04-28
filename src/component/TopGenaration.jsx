import PhotoCard from './PhotoCard'

const TopGenaration = async() => {
    const res = await fetch("http://localhost:3000/data.json")
    const photos = await res.json()
    const topPhotos = photos.slice(0,8)
    
    
    
    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>Top Genarations</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                   topPhotos.map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGenaration;