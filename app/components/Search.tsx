import Styles from "../page.module.css"

const ipPlaceholder: IPPlaceHolder = {
    ipadress: '192.212.174.101',
    location: 'Brooklyn, NY 10001',
    timezone: 'UTC-05:00',
    isp: 'SpaceX Starlink',
}

export default function Search() {
  return (
    <nav className={Styles.nav}>
      <h1>IP Address Tracker</h1>
        <div className={Styles.search}>
            <input type="text" placeholder="Insert IP address"/>
            <button>Search</button>
        </div>
        <div>
          {/* should have the 4 values:  
            IP DRESS
            LOCATION
            TIMEZONE
            ISP*/}
          {ipPlaceholder.}
        </div>
    </nav>
  )
}
