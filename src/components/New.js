import React from "react";
import data from "./api.json";

export default function App() {
  const [Filter, setFilter] = React.useState("all");
  const [dataMember, setDataMember] = React.useState([]);

  React.useEffect(() => {
    if (Filter === "all") {
      setDataMember(data.results);
    } else {
      const filtered = data.results.filter(
        (member) => member.tags === Filter
      );
      setDataMember(filtered);
    }
  }, [Filter]);

  const checkboxFiltersValue = {
    all: "all",
    nature: "nature",
    Sea: "Sea",
    Animal:"Animal",
    bird:"bird",
    river:"river"
  };

  console.log(dataMember);

  return (
    <>
    <div className="App">
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.all}
          checked={Filter === checkboxFiltersValue.all}
          onClick={({ target }) => setFilter(target.value)}
        />
        All
      </label>
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.nature}
          checked={Filter === checkboxFiltersValue.nature }
          onClick={({ target }) => setFilter(target.value)}
        />
        Nature
      </label>
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.Sea}
          checked={Filter === checkboxFiltersValue.Sea}
          onClick={({ target }) => setFilter(target.value)}
        />
       Sea
      </label>
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.Animal}
          checked={Filter === checkboxFiltersValue.Animal}
          onClick={({ target }) => setFilter(target.value)}
        />
       Animal
      </label>
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.river}
          checked={Filter === checkboxFiltersValue.river}
          onClick={({ target }) => setFilter(target.value)}
        />
       River
      </label>
      {dataMember && dataMember.map((member) => <div><img src={member.link} alt="" height="100px" /></div>)}
    </div>
    </>
  );
}
// import React from "react";
// import "./App.css";
// import Checkbox from "./components/Checkbox";
// import Router from "./components/Routers";

// const App = () => {
//   return (
//     <div>
//       <Router />
//       {/* <Checkbox /> */}
//     </div>
//   );
// };

// export default App;