import { Restaurant } from "@/hooks/useRestaurants";

export const db :Restaurant[] = [
    {
        name: "QUIMBAYA by Edwin Rodríguez",
        servesCuisine: "Colombian",
        address: {
            street: "Calle de Zurbano, 63",
            locality: "Madrid"
        },
        ratings: 9.6,
        id: "575039",
        photos: [
            "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/f8ef30c6-f2e2-480f-bcdd-e2bcc02c36ca.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/a0b5ac68-fafa-4f61-a2cb-74d4df029d8d.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/4f55da33-bf86-48d7-a006-d467c92bb1ba.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/a6fe8381-7a3c-41c3-80c0-f2f14f65d445.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/7d68b15f-a28b-4cf1-882b-8c1cdbe139d3.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/41d6b523-a983-48de-a2a7-5eaec4131982.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/7713751b-beca-4d2e-bce7-a19f134f1825.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/0e302af8-c36b-4f62-9249-c96fd2414f9d.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/fcb0cc51-f928-4bba-8fa6-66147e58d74c.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/b7d0f048-9e84-4999-a84c-e79d98355100/d78716a0-817d-4b21-a4ec-e6101417e0be.jpg"
        ]
    },
    {
        name: "El Invernadero de Rodrigo de la Calle",
        servesCuisine: "Mediterranean",
        address: {
            street: "C. de Ponzano, 85",
            locality: "Madrid"
        },
        ratings: 9.9,
        id: "745447",
        photos: [
            "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/1ed81f5c-d74b-4149-8698-f8530eaa4fdd.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/372bd98a-66f6-487d-8a40-77e635d3a03e.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/0b759fea-5e3c-45a5-a0e8-912b9db1ef8b.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/78c58129-7819-4eba-9a8e-4151183642ae.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/05ea800d-0ed7-49b6-a6da-2fa2e01061cd.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/29b3e403-1e0f-4a8b-b166-cdee5a61bd46.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/227463a0-f6e3-49ba-8322-89fd61d02974.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/977d7bb9-45f9-4f37-ac9d-ee333f381efb.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/4f44b5d5-1734-4713-bf1c-43041fb29af4.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/d448df28-69cd-4ff8-9bf4-c409415b0fc0/538003bc-25ea-4cbf-b0ea-1c9f8a56c763.jpg"
        ]
    },
    {
        name: "WELKHOMEclub",
        servesCuisine: "Fusion",
        address: {
            street: "Calle del Monte Esquinza, 15",
            locality: "Madrid"
        },
        ratings: 9.3,
        id: "489833",
        photos: [
            "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/d4bdf6e7-521f-461d-b2aa-9a2ff14ba85d.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/13490ed5-85c9-41b5-b496-00843b128146.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/48c3ddd2-c895-452c-995a-39983c670434.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/91d043fb-eb9b-41d6-b63d-916864defc53.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/70d860d7-0c13-4487-894a-03258c385edc.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/734cfc60-79a1-4280-9e05-b4b6caa64900.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/b92021c5-63bd-486b-91de-f7209e670648.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/4465945b-b13e-4c48-8791-71f4ed8f64df.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/cd3f0c2c-e46b-4c07-8468-f5c438f6c031.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/655911d5-eac0-469a-968f-14f71eb79a0d/9ddcac1b-6831-47b7-9a36-dc57f26a49a5.jpg"
        ]
    },
    {
        name: "La Mordida de Bernabeu",
        servesCuisine: "Mexican",
        address: {
            street: "Av. de Brasil, 6",
            locality: "Madrid"
        },
        ratings: 9.3,
        id: "464253",
        photos: [
            "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/8ab4dd7b-0692-4c84-801d-348099126e87.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/a57ed151-cec5-4d6a-8f26-9b427db0e890.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/1cfaa384-bf46-4999-8087-c7d5397a5fd5.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/1503898b-009b-46a1-8d6e-5b38954ecc9b.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/0a0300fa-2340-4f12-8a39-d927231ad4e0.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/23cdad1d-e6e7-4b57-9a7b-37ce4b43ef87.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/6643bc3b-d186-48e8-a85f-fa678b2a5bf7.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/0d66bf08-24cc-4cce-a40d-17ac0498e526.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/6908a80e-95b5-4311-90d8-7fa524cc2cb4.jpg", "https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_480,h_270/restaurant/f55c7d21-59d1-4510-b115-88df2159afab/0dad0996-ee0d-49e4-9214-00b8740e41da.jpg"
        ]
    }
]