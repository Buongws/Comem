import data from "./utils/data.json";

function App() {
  const { TrangDiem } = data;

  console.log(data);

  new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), Math.random() * 200);
  });
  return <div className="App"></div>;
}

export default App;
