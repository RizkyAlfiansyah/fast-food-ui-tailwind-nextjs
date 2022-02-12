import Sidebar from "../components/dashboard/Sidebar";
import Content from "../components/dashboard/Content";
import OverallStats from "../components/dashboard/OverallStats";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-white-900">
      <Sidebar />
      <Content />
      <OverallStats />
    </div>
  )
}