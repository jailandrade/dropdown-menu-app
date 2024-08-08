import {DropdownMenu} from "@jailandrade/dropdown-menu";
import "@jailandrade/dropdown-menu/dist/index.css";

function App() {
  const options = [
    "Victor",
    "Emiliano",
    "Maximiliano",
    "Juan Gabriel",
    "Juan Camaney",
    "Gol D. Roger",
    "Hercules",
  ];
  return (
    <div className="p-8">
      <DropdownMenu legend="Elige un usuario" options={options} match="" />
    </div>
  );
}

export default App;
