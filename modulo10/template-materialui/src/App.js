import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import AnchorTemporaryDrawer from "./pages/Login/menu.jsx";
import AccordionUsage from "./pages/tarefa/accordion.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <AnchorTemporaryDrawer />
      <ListarTarefa />
      <AccordionUsage />
    </div>
  );
}

export default App;
