import React, { useEffect, useState } from 'react';

const Planets = () => {
  // 1️⃣ Track selected index, not planet object
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [data, setData] = useState(null);

  // Fetch data once
    useEffect(() => {
    fetch('/data.json')
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
        flex items-center justify-between w-full flex-col gap-24 px-6
        lg:max-w-[80rem] lg:px-24 lg:flex-row lg:gap-32
        ">
            {/* Pick Destination Container */}
            <div className="
            flex flex-col gap-4 w-full relative max-w-[32rem]  items-center justify-center
            lg:w-[112rem] lg:gap-24 lg:items-start lg:justify-start
            ">
                <h1 className="
                z-10 uppercase text-gray-300 tracking-wider flex flex-row absolute w-full text-center text-3xl gap-2 items-center justify-center
                lg:text-4xl lg:relative lg:text-start lg:font-normal lg:gap-4 lg:items-start lg:justify-start
                ">
                    <span className="lg:text-gray-600">01</span> Pick your destination
                </h1>
                {/* Planet Image */}
                <img
                    src={`/assets/destination/image-${selectedPlanet.name.toLowerCase()}.png`}
                    alt={selectedPlanet.name}
                    className="w-full h-full object-cover z-0 max-w-[24rem] lg:max-w-[56rem]"
                />
            </div>

            {/* Planets Text Container */}
            <div className="flex flex-col gap-4 w-full max-w-[40rem] items-center text-center
            lg:w-[50%] lg:gap-8 lg:text-start lg:items-start
            ">
            {/* Planet selector */}
            <div className="
            flex flex-row w-full items-center justify-center
            lg:items-start lg:justify-start
            ">
                <ul className="flex flex-row gap-12">
                {data.destinations.map((planet, index) => (
                    <li
                    key={planet.name}
                    // 3️⃣ Update selectedIndex on click
                    onClick={() => setSelectedIndex(index)}
                    // 4️⃣ Use template string for dynamic classes
                    className={`uppercase text-lg py-4 border-b-4 cursor-pointer tracking-widest 
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
            flex flex-col w-full items-center justify-center
            lg:items-start lg:justify-start
            ">
                <h2 className="
                uppercase font-serif tracking-widest text-8xl
                lg:min-w-[28rem]
                ">
                {selectedPlanet.name}
                </h2>
                <p className="
                text-gray-400 text-xl mt-8 tracking-wider leading-8 max-w-[50ch]
                lag:max-w-[56ch]
                ">
                {selectedPlanet.description}
                </p>
                {/* Divider */}
                <div 
                className="
                    w-full h-[1px] bg-gray-700 mt-12 max-w-[32rem]
                    lg:w-full lg:mt-16"/>
            </div>

            {/* Planet Details */}
            <div className="
            flex flex-row w-full items-center justify-between gap-8 px-4 max-w-[24rem]
            lg:items-start lg:justify-start lg:gap-12
            ">
                <div className="flex flex-col gap-0.5">
                <h3 className="uppercase text-gray-500 text-base">Avg. Distance</h3>
                <p className="uppercase text-gray-300 text-4xl">
                    {selectedPlanet.distance}
                </p>
                </div>
                <div className="flex flex-col ml-12 gap-0.5">
                <h3 className="uppercase text-gray-500 text-base">Est. Travel time</h3>
                <p className="uppercase text-gray-300 text-4xl">
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
