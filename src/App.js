import { useEffect, useState } from "react";
import Card from "./Card.js";

async function getNotesData() {
  const dataList = await (await fetch("/notes.json")).json();
  return dataList;
}

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getNotesData().then((dataList) => setDataList(dataList));
  }, []);

  return (
    <div style={{ display: "block" }}>
      {dataList.map((data) => (
        <Card title={data.title} text={data.text} images={data.images} />
      ))}
    </div>
  );
}

export default App;
