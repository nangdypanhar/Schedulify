import "./App.css";
import LoginPage from "./views/LoginPage/login_page";
import Sidebar, { SidebarItem } from "./util/Sidebar";
import { BsCalendar3 } from "react-icons/bs";

function App() {
  return (
    <main className="flex">
      <Sidebar>
        <SidebarItem icon={<BsCalendar3 size={20} />} text="Calendar"  />
        <SidebarItem icon={<BsCalendar3 size={20} />} text="Dashboard" active />
        <SidebarItem icon={<BsCalendar3 size={20} />} text="NewYearEvently "  />
      </Sidebar>
      <div>
        hello world
      </div>
    </main>
  );
}

export default App;
