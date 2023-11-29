import englishData from "../englishData.json";
import MainCard from "../components/MainCard";

const Main = () => {
  return (
    <div className="bg-blue-100 min-h-screen max-w-screen-md mx-auto px-8 pt-20">
      <h1 className="text-center text-5xl font-semibold hover:text-blue-400 border-b-2 bg-red-100 px-4 py-2 font-Orbit">
        Study English
      </h1>
      <ul>
        {englishData.map((v, i) => (
          <MainCard key={i} title={v.title} day={v.day} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
