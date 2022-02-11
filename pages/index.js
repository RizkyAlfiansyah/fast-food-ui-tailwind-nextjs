import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import OverallStats from "../components/OverallStats";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-white-900">
      <Sidebar />
      <Content />
      <OverallStats />
    </div>
  )
}