import React from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const TechnologyCarrousel = () => {

    // Track selected index for each crew object
        const [technology, setTechnology] = useState(0);
        const [data, setData] = useState(null)
    
        // Fetch data
        useEffect(() => {
            fetch('../Public/data.json')
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.log('Error fetching data:', error));
        }, []);
        if (!data) {
            return <div>Loading...</div>;
        }
    
        const activeTechnology = data.crew[technology]

    return (
        // Carrousel Container
        <div>
            {/* Carrousel Numbers */}
            <div className="flex flex-col gap-4">
                
            </div>
        </div>
    )
}

export default TechnologyCarrousel