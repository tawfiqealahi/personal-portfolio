import React, { useEffect, useState } from 'react';
import { BsCupHot, BsGraphUpArrow } from 'react-icons/bs';
import { IoCloudUploadOutline } from 'react-icons/io5';

type Props = {};
interface Service {
    icon: string;
    title: string;
    description: string;
}

const iconMapping: { [key: string]: React.ElementType } = {
    BsGraphUpArrow,
    BsCupHot,
    IoCloudUploadOutline,
};



const Services: React.FC<Props> = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);






return (
    <div id='services' className='pt-20'  >
        <h1 className='text-5xl font-bold  text-center'>My Services</h1>
        <p className='text-center mt-10'>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 '>
            {
                services.map((service: Service, index: number) => {
                    const Icon = iconMapping[service.icon];
                    return (

                        <div className='text-center border border-slate-500 rounded-lg group p-5 transition-all duration-500 ' key={index}>
                            {
                                Icon && <Icon className="text-4xl mt-5 md:text-7xl mb-4 mx-auto text-[#007BFF]" />
                            }

                            <h2 className="text-4xl ">{service.title} </h2>
                            <div className="border-b-4 my-5 border-[#007BFF] w-20 mx-auto group-hover:w-36 transition-all duration-500  "></div>
                            <p className='mt-2'>{service.description}</p>

                        </div>
                    );
                })
            }
        </div>
    </div>
);
}

export default Services;