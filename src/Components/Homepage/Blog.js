import React from 'react';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

const blogData = [
    {
        name: 'Bride and Groom',
        image: img1
    },
    {
        name: 'Bride and Groom',
        image: img2
    },
    {
        name: 'Bride and Groom',
        image: img3
    }
]

const Blog = () => {
    return (
        <div className="h-screen bg-gray-100">
            <section className="md:h-auto flex items-center text-gray-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-base md:text-lg text-indigo-700 mb-1">Here some of our photography article</h3>
                        <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Our Blog</h1>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img src={img1} alt="" className="lg:h-72 md:h-48 w-full object-cover object-center" />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">15 August, 2021</h2>
                                    <h1 className="text-2xl font-semibold mb-3">Bride and Groom</h1>
                                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, adipisci!</p>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    <a href="#" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img src={img2} alt="" className="lg:h-72 md:h-48 w-full object-cover object-center" />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">15 August, 2021</h2>
                                    <h1 className="text-2xl font-semibold mb-3">Bride and Groom</h1>
                                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, adipisci!</p>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    <a href="#" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img src={img3} alt="" className="lg:h-72 md:h-48 w-full object-cover object-center" />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">15 August, 2021</h2>
                                    <h1 className="text-2xl font-semibold mb-3">Bride and Groom</h1>
                                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, adipisci!</p>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    <a href="#" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;