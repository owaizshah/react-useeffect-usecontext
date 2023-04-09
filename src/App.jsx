import Sidebar from "./components/Sidebar";
import AccordionPage from "./Pages/AccordionPage";
import DropdownPage from "./Pages/DropdownPage";
import ButtonPage from "./Pages/ButtonPage";
import Routes from "./components/Routes";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import CounterPage from "./Pages/CounterPage";

function App() {
  return (
    <div className="container mt-1  ">
      <Sidebar />

      <div>
        <Routes path="/Accordion">
          <AccordionPage />
        </Routes>
        <Routes path="/">
          <DropdownPage />
        </Routes>
        <Routes path="/Button">
          <ButtonPage />
        </Routes>
        <Routes path="/Modal">
          <ModalPage />
        </Routes>
        <Routes path="/Table">
          <TablePage />
        </Routes>
        <Routes path="/Counter">
          <CounterPage initialState={10} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
