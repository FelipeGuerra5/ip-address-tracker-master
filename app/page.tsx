import Image from 'next/image'
import styles from './page.module.css'
import Search from './components/Search'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Insert the Navbar so it may hava a about page with links to my repo and LikedIn */}
      {/* Serch field */}
      <Search />
      {/* Data Returned Dashboard */}
      {/* The map component that will hold the map */}
    </main>
  )
}
