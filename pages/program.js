import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {
    return ( 

        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* main start */}
            <main className={styles.main}>
                <h1 className={styles.title}>
                    WELCOME TO BIKE COMPANY
                </h1>
                <div className={styles.grid}>

                    <Row>
                        <Col><div className={styles.card}>
                <Image src="/honda1.jpg"  alt="Pic1" layout='responsive' width="400%" height="300px"/>
                    <h2>hero honda</h2>
                    <p>Automatic</p>
                    <h4>₹ 20.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details">View Details </a>
                    </div>
                    </div></Col>
                        
                <Col>
                <div className={styles.card}>
                <Image src="/honda2.jpg" alt="Pic2" width="400%" height="300px"/>
                    <h2>honda shine</h2>
                    <p>Automatic</p>
                    <h4>₹ 1.5Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details">View page</a>
                    </div>
                </div></Col>
                <Col>
                <div className={styles.card}>
                <Image src="/honda3.jpg" alt="Pic3" width="400%" height="300px"/>
                    <h2>Thar</h2>
                    <p>Automatic</p>
                    <h4>₹ 1 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details">View Details</a>
                    </div></div>
                </Col>
                </Row>

                

                </div>

                <div className={styles.bootstrap}>

                </div>
                    <Button>Button</Button>
                </main>

        </div>
    )
}