import React, { useEffect, useState } from 'react';

const Planets = () => {
  // 1️⃣ Track selected index, not planet object
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [data, setData] = useState(null);

  // Fetch data once
    useEffect(() => {
    fetch('../Public/data.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log('Error fetching data:', error));
    }, []);

  // Show loading until data arrives
    if (!data) {
        return <div>Loading...</div>;
    }

  // 2️⃣ Derive selectedPlanet from the index
    const selectedPlanet = data.destinations[selectedIndex];

    return (
        <div className="flex flex-row items-center justify-center w-full h-full">
        <section className="
        flex flex-row items-center justify-between w-full gap-32
        md:flex-col md:gap-24
        lg:max-w-[80rem] lg:px-24 lg:flex-row
        ">
            {/* Pick Destination Container */}
            <div className="
            flex flex-col gap-4 w-full relative
            md:max-w-[32rem]  md:items-center md:justify-center
            lg:w-[112rem] lg:gap-24 lg:items-start lg:justify-start
            ">
                <h1 className="
                z-10 uppercase text-gray-300 tracking-wider
                md:absolute md:top-50% md:left-50% md:w-full md:text-center md:font-bold
                lg:text-2xl lg:relative lg:text-start lg:font-normal
                ">
                    <span className="lg:text-gray-600 md:text-gray-300">01</span> Pick your destination
                </h1>
                {/* Planet Image */}
                <img
                    src={selectedPlanet.images.png}
                    alt={selectedPlanet.name}
                    className="
                    w-full h-full object-cover z-0 
                    md:max-w-[24rem]
                    lg:max-w-[rem]
                    "
                />
            </div>

            {/* Planets Text Container */}
            <div className="flex flex-col gap-4 w-full
            md:w-full md:max-w-[40rem] md:items-center md:text-center
            lg:w-[50%] lg:gap-8 lg:text-start
            ">
            {/* Planet selector */}
            <div className="
            flex flex-row w-full
            md:items-center md:justify-center
            lg:w-full lg:items-start lg:justify-start
            ">
                <ul className="flex flex-row gap-12">
                {data.destinations.map((planet, index) => (
                    <li
                    key={planet.name}
                    // 3️⃣ Update selectedIndex on click
                    onClick={() => setSelectedIndex(index)}
                    // 4️⃣ Use template string for dynamic classes
                    className={`uppercase text-md py-4 border-b-2 cursor-pointer
                        ${selectedIndex === index
                        ? 'text-gray-100 border-white'
                        : 'text-gray-400 border-transparent'}`}
                    >
                    {/* 5️⃣ Render each planet's name */}
                    {planet.name}
                    </li>
                ))}
                </ul>
            </div>

            {/* Planet Info Container */}
            <div className="
            flex flex-col w-full
            md:items-center md:justify-center
            lg:items-start lg:justify-start
            ">
                <h2 className="uppercase font-regular tracking-widest text-8xl">
                {selectedPlanet.name}
                </h2>
                <p className="text-gray-400 text-base mt-8 max-w-[64ch]">
                {selectedPlanet.description}
                </p>
                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-S700 mt-16
                md:max-w-[32rem]
                lg:w-full
                " />
            </div>

            {/* Planet Details */}
            <div className="
            flex flex-row w-full
            md:items-center md:justify-center
            lg:w-full lg:items-start lg:justify-start
            ">
                <div className="flex flex-col gap-0.5">
                <h3 className="uppercase text-gray-500 text-sm">Avg. Distance</h3>
                <p className="uppercase text-gray-300 text-3xl">
                    {selectedPlanet.distance}
                </p>
                </div>
                <div className="flex flex-col ml-12 gap-0.5">
                <h3 className="uppercase text-gray-500 text-sm">Est. Travel time</h3>
                <p className="uppercase text-gray-300 text-3xl">
                    {selectedPlanet.travel}
                </p>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
};

export default Planets;
