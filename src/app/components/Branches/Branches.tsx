'use client'
import { useRestaurants } from "@/hooks";
import styles from "./branches.module.scss";
import { RestaurantCard } from "..";
import { Skeleton } from "antd";

const Branches = () => {

  const { info, isLoading } = useRestaurants();

  return (
    <section className={styles.container} id="branches">
      <h2>Nuestras sucursales</h2>
      <div className={styles.cardsContainer}>
        {
          isLoading ? <Skeleton /> : info.map(resto => <RestaurantCard
            name={resto.name}
            servesCuisine={resto.servesCuisine}
            address={resto.address}
            ratings={resto.ratings}
            photos={resto.photos}
            id={resto.id}
            key={String(resto.id)}
          />)
        }
      </div>

    </section>
  )
}
export default Branches