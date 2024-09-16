import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    
    <>
      <Head>
        <title>MediSynQ</title>
        <meta name="description" content="Roche homepage" />
      </Head>
      <header className={styles.header}>
   
      <div className={styles.logo}>
        MEDISYN
        <span className={styles.q}>Q</span>
      </div>
      
      <nav className={styles.nav}>
          <a href="#">About Roche</a>
          <a href="#">Solutions</a>
          <a href="#">Innovation</a>
          <a href="#">Stories</a>
          <a href="#">Media</a>
          <a href="#">Investors</a>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>Providing care yet saving time</h1>
     
        <div className={styles.container}>
        <div className={styles.cardsContainer}>
        <p>
At Oque Softwares, we’re committed to enhancing the healthcare experience through Medisynq, our innovative application designed to streamline patient interactions with healthcare providers. Medisynq features a smart scheduling system and public displays of clinic queue lengths and wait times, enabling efficient patient flow management and informed decision-making. With its capability to operate both online and offline, Medisynq ensures broad accessibility and aims to reduce wait times while improving overall healthcare efficiency.
        </p>
          <Card 
            title="Join us as a Vendor" 
            description="Become part of the MEDISYNQ network and offer your services."
          />
          <Card 
            title="Search your Nearest Vendors" 
            description="Find vendors closest to your location with just a click."
          />
          <Card 
            title="Search Data Catalogue" 
            description="Explore our comprehensive data catalog for more information."
          />
        </div>
      </div>
      </main>
    </>

  );
}
function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
