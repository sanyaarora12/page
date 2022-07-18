import React from "react";
import data from "./api.json";

export default function App() {
  const [genderFilter, setGenderFilter] = React.useState("all");
  const [dataMember, setDataMember] = React.useState("");

  React.useEffect(() => {
    if (genderFilter === "all") {
      setDataMember(data.results);
    } else {
      const filteredGender = data.results.filter(
        (member) => member.tags === genderFilter
      );
      setDataMember(filteredGender);
    }
  }, [genderFilter]);

  const checkboxFiltersValue = {
    all: "all",
    nature: "nature",
    Sea: "Sea",
    Animal:"Animal",
    bird:"bird"
  };

  console.log(dataMember);

  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.all}
          checked={genderFilter === checkboxFiltersValue.all}
          onClick={({ target }) => setGenderFilter(target.value)}
        />
        All
      </label>
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.nature}
          checked={genderFilter === checkboxFiltersValue.nature}
          onClick={({ target }) => setGenderFilter(target.value)}
        />
        Nature
      </label>
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.Sea}
          checked={genderFilter === checkboxFiltersValue.Sea}
          onClick={({ target }) => setGenderFilter(target.value)}
        />
       Sea
      </label>
      <label>
        <input
          type="checkbox"
          value={checkboxFiltersValue.Animal}
          checked={genderFilter === checkboxFiltersValue.Animal}
          onClick={({ target }) => setGenderFilter(target.value)}
        />
       Animal
      </label>
      {dataMember && dataMember.map((member) => <div><img src={member.link} alt="" height="100px" /></div>)}
    </div>
  );
}
