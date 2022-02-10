import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className="flex xl:w-full md:w-1/13 xl:h-full md:h-1/13 bg-white-900">
      <Sidebar />
      <Content />
    </div>
  )
}