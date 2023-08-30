'use client'
import { Restaurant } from "@/hooks/useRestaurants"
import { Button, Carousel, ConfigProvider, Space } from "antd"
import Image from "next/image"
import styles from "./restaurantCard.module.scss"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import Days from "./components/Days/Days"
import ModalReserv from "./components/ModalReserv/ModalReserv"

interface Props extends Restaurant {

}


const RestaurantCard = ({ name, address, ratings, servesCuisine, photos }: Props) => {

  const days = [
    {
      day: "Dom",
      start: "12",
      end: "24"
    },
    {
      day: "Lun",
      start: "12",
      end: "24"
    },
    {
      day: "Mar",
      start: "12",
      end: "24"
    },
    {
      day: "Mie",
      start: "12",
      end: "24"
    },
    {
      day: "Jue",
      start: "12",
      end: "24"
    },
    {
      day: "Vie",
      start: "12",
      end: "24"
    },
    {
      day: "Sab",
      start: "12",
      end: "24"
    }
  ]


  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <p>{ratings}</p>
      </div>
      <Carousel>
        <div className={styles.photoContainer}>
          <Image src={photos[0]} alt="" width={300} height={200} />
        </div>
        <div className={styles.photoContainer}>
          <Image src={photos[1]} alt="" width={300} height={200} />
        </div>
        <div className={styles.photoContainer}>
          <Image src={photos[2]} alt="" width={300} height={200} />
        </div>
        <div className={styles.photoContainer}>
          <Image src={photos[3]} alt="" width={300} height={200} />
        </div>
        <div className={styles.photoContainer}>
          <Image src={photos[4]} alt="" width={300} height={200} />
        </div>
        <div className={styles.photoContainer}>
          <Image src={photos[5]} alt="" width={300} height={200} />
        </div>
        <div className={styles.photoContainer}>
          <Image src={photos[6]} alt="" width={300} height={200} />
        </div>
        <div className={styles.photoContainer}>
          <Image src={photos[7]} alt="" width={300} height={200} />
        </div>
      </Carousel>
      <div className={styles.infoContainer}>
        <div className={styles.nameAddress}>
          <h3>{name}</h3>
          <h4>{address.street} - {address.locality}</h4>
        </div>
        <div className={styles.schedules}>
          {
            days.map(day => <Days day={day.day} start={day.start} end={day.end} key={day.day} />)
          }
        </div>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#9a8668',
              borderRadius: 2,
              colorText: '#e6eaf2',
              paddingContentHorizontal: 30,

              // Alias Token
              colorBgContainer: '#ffffff0',
            },
          }}
        >

          <Space direction="horizontal" className={styles.buttons}>
            <Button type="default" size="large" >
              Delivery
            </Button>
            <ModalReserv />
          </Space>
        </ConfigProvider>


      </div>
    </div>
  )
}
export default RestaurantCard