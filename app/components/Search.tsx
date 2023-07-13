import Styles from "../page.module.css"

export default function Search() {
  return (
    <nav className={Styles.nav}>
      <h1>IP Address Tracker</h1>
        <div className={Styles.search}>
            <input type="text" placeholder="Insert IP address"/>
            <button>Search</button>
        </div>
        
    </nav>
  )
}
