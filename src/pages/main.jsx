import MainCard from "../components/MainCard";
import englishData from "../englishData.json";

const Main = () => {
  return (
    <div className="bg-cyan-100">
      <div className="container text-center">
        <h1 className="text-4xl font-Orbit bg-white rounded-lg border-r-2 border-gray-600 border-b-2 px-4 py-2 inline">
          Study English
        </h1>
        <ul className="mt-12 flex flex-col gap-8 pb-20">
          {englishData.map((v, i) => (
            <MainCard key={i} title={v.title} day={v.day} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
