 'use client'
// import axios from "axios";
//import { useState, useEffect } from "react";
import { db } from "@/utilities";

export interface Restaurant {
    name: string
    servesCuisine: string
    address: Adress
    ratings: number
    id: string
    photos: string[]
}

export interface Adress {
    street: string
    locality: string
}

// const options = {
//     method: 'GET',
//     url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list',
//     params: {
//         queryPlaceValueCityId: '328022',
//         pageSize: '10',
//         pageNumber: '1'
//     },
//     headers: {
//         'X-RapidAPI-Key': '86f545ab2amshe8382e1a3dd4f83p18a3d6jsn11e0b31dc4c2',
//         'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
//     }
// };

const useRestaurants = () => {

    /**
     * Custom hook para hacer una llamada a una API de informacion de restaurantes,
     * Para salvaguardar el exito de entrega del proyecto y solventar algun problema futuro
     * se genero un archivo db.ts con la respuesta de esta API.
     */


    //const [isLoading, setIsLoading] = useState(true);
    // const [info, setInfo] = useState<Restaurant[]>([]);

    // async function fetchData() {
    //     try {
    //         const response = await axios.request(options);
    //         console.log(response);
    //         const unorderInfo = response.data.data;
    //         const ordenedInfo: Restaurant[] = unorderInfo.map((restaurant: any) => {
    //             return {
    //                 name: restaurant.name,
    //                 servesCuisine: restaurant.servesCuisine,
    //                 address: {
    //                     street: restaurant.address.street,
    //                     locality: restaurant.address.locality
    //                 },
    //                 ratings: restaurant.aggregateRatings.thefork.ratingValue,
    //                 id: restaurant.id,
    //                 photos: restaurant.photosCarousel.map((photo: any) => photo["480x270"])
    //             }
    //         })
    //         setInfo(ordenedInfo.slice(0, 4));
    //         localStorage.setItem('storage', JSON.stringify(ordenedInfo.slice(0, 4)))
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     const infoLoaded = localStorage.getItem('storage');
    //     console.log(infoLoaded)
    //     if (infoLoaded) {
    //         const infoParsed = JSON.parse(infoLoaded) as Restaurant[]
    //         setInfo(infoParsed);
    //     } else {
    //         fetchData()
    //     }
    //     setIsLoading(false)

    //     console.log(info)

    // }, [])

    return {
        db
    }
}
export default useRestaurants
