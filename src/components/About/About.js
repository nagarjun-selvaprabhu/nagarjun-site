import React from 'react';
import Image from 'next/image';
import Img from '../../../public/viet.jpeg';

const about = () => {
    return (
        <div>
            <h1 className='flex justify-center'>Nagarjun Selvaprabhu</h1>
            <Image
                src={Img}
                width={300}
                height={300}
                alt="Picture of the author"
                className="mb-3 h-32 w-32 bg-zinc-100 rounded-full object-cover ring-white transition-all duration-300 hover:h-64 hover:w-64 dark:bg-zinc-800"
            />
            <p>Hello! I'm a software developer with three years of experience, currently enhancing my skills at Zoho Corp,a SaaS-based org in Chennai.
                My professional journey is deeply rooted in my love for Java, which stands as my preferred programming language.</p><br />
            <p>Outside the realm of coding, I find my escape in traveling and gaming. Exploring new places and cultures broadens my horizons. Gaming, on the other hand, keeps my reflexes sharp and provides a fun way to unwind.</p><br />

            <p>Whether it's through lines of code or the paths less traveled, I'm always on a quest for learning and growth. Welcome to my space where technology meets adventure!</p>
        </div>
    );
};

export default about;