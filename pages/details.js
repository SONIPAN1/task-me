import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Details() {
    return (
        <h1>
         <div className={styles.cards}>
        <Image src="/car.jpg"  alt="Pic1" width="400%" height="300px"/>
            <h2>Scorpio</h2>
            <p>Automatic</p>
            <h4>₹ 20.00 Lakh Onwards</h4>
            <div className={styles.details}></div>
                <a href="/details"View details></a>
                </div>
                  <div className={styles.cards}>
                <Image src="/car22.jpg" alt="Pic2" width="400%" height="300px"/>
                    <h2>Fortuner</h2>
                    <p>Automatic</p>
                    <h4>₹ 40.00 Lakh Onwards</h4>
                    <div className={styles.details}></div>
                        <a href="/details"View details></a>
                        </div>
                <div className={styles.cards}>
                <Image src="/car2.jpg" alt="Pic3" width="600%" height="400px"/>
                    <h2>Thar</h2>
                    <p>Automatic</p>
                    <h4>₹ 18.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="/details"View Details></a>
                    </div>
                </div>
                <div className={styles.cards}>
                <Image src="/car3.jpg" width="400%" height="300px"/>
                    <h2>Harrier</h2>
                    <p>Automatic</p>
                    <h4>₹ 22.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details">View Details</a>
                    </div>
                </div>

        </h1>
    )

}