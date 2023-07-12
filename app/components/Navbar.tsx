import Styles from "../page.module.css"

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
        <div className={Styles.search}>
            <input type="text" placeholder="Insert IP address"/>
            <button>Search</button>
        </div>
    </nav>
  )
}
