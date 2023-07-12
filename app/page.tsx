import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      {/* Navbar with the serch field and the details of the research */}
      {/* Maybe the data panel can be a component itself */}
      {/* The map component that will hold the map */}
    </main>
  )
}
