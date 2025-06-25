import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import './index.css'

export default function App() {
  return (
    <>
      <Header/>
      <Entry 
      img = {"https://scrimba.com/links/travel-journal-japan-image-url"}
      title = {"Mount Fuji"}
      country = {"Japan"}
      googleMapsLink = {"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"}
      dates = {"12 Jan, 2021 - 24 Jan, 2021"}
      text = {"Mount Fuji is Japan's highest peak, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707. The mountain is a UNESCO World Heritage Site and is considered one of Japan's three sacred mountains. It is a popular destination for both tourists and climbers, offering stunning views and a unique cultural experience."}
      />
    </>
  )

}
