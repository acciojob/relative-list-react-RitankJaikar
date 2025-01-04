import React from "react";

function App() {
  const relatives = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Suman" },
    { id: 3, name: "Rahul" },
    { id: 4, name: "Priya" },
  ];

  return (
    <div>
      <h1>Relatives to Visit this Diwali</h1>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
