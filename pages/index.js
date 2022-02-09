import DateClock from "../components/DateClock";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex xl:w-full md:w-1/2 h-full bg-white-900">
      <Sidebar />
      <DateClock/>
    </div>
  )
}