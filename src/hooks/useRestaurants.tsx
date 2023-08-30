'use client'
import axios from "axios";
import { useState, useEffect } from "react";

const options = {
    method: 'GET',
    url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list',
    params: {
        queryPlaceValueCityId: '328022',
        pageSize: '10',
        pageNumber: '1'
    },
    headers: {
        'X-RapidAPI-Key': '86f545ab2amshe8382e1a3dd4f83p18a3d6jsn11e0b31dc4c2',
        'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
    }
};

export interface Restaurant {
    name: string
    servesCuisine: string
    address: Adress
    ratings: number
    id: number
    photos: string[]
}

export interface Adress {
    street: string
    locality: string
}


const useRestaurants = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState<Restaurant[]>([]);

    async function fetchData() {
        try {
            const response = await axios.request(options);
            const unorderInfo = response.data.data;
            const ordenedInfo: Restaurant[] = unorderInfo.map((restaurant: any) => {
                return {
                    name: restaurant.name,
                    servesCuisine: restaurant.servesCuisine,
                    address: {
                        street: restaurant.address.street,
                        locality: restaurant.address.locality
                    },
                    ratings: restaurant.aggregateRatings.thefork.ratingValue,
                    id: restaurant.id,
                    photos: restaurant.photosCarousel.map((photo: any) => photo["480x270"])
                }
            })
            setInfo(ordenedInfo.slice(0, 4));
            sessionStorage.setItem('storage', JSON.stringify(info))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const infoLoaded = sessionStorage.getItem('storage');
        if (infoLoaded) {
            const infoParsed = JSON.parse(infoLoaded) as Restaurant[]
            setInfo(infoParsed);
        } else {
            fetchData()
        }
        setIsLoading(false)

    }, [])

    return {
        isLoading,
        info
    }
}
export default useRestaurants
