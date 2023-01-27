import SearchArea from "./components/SearchArea";
import InfoCard from "./components/InfoCard";


function App() {

  // IconLink:  https://openweathermap.org/img/wn/{ICON CODE}@4x.png

  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <SearchArea />
      <InfoCard />
    </div>
  );
}

export default App;
