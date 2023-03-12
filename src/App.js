import "./App.css";
import Loader from "./elements/Loader/Loader";
import { useGetWordsQuery } from "./redux/wordsApi";

function App() {
  const { data = [], isLoading } = useGetWordsQuery();
  console.log("DATA --->", data);

  if (isLoading) return <Loader />;
  return (
    <div className="App">
      <h1>WORDS:</h1>
      {data.map((item) => (
        <>
          <p>
            {item.word} -{" "}
            {item?.translation.map((w) => (
              <>
                <p>{w} </p>
              </>
            ))}
          </p>
          {item?.phrases?.map((phrase) => (
            <div>{phrase}</div>
          ))}
        </>
      ))}
    </div>
  );
}

export default App;
