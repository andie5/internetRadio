import React from "react";

const Container = () => {
  const sortedGenres = [...genres];
  sortedGenres.sort((a, b) => b.size - a.size);

  return (
    <div style={{ padding: 15 }}>
      {sortedGenres.map(item => {
        return <ItemButton item={item} />;
      })}
    </div>
  );
};

const ItemButton = ({ item: { title, size } }) => {
  return (
    <button
      style={{
        border: "1px solid black",
        borderRadius: 4,
        padding: size * 3,
        fontSize: 10 + size * 2,
        margin: 8
      }}
    >
      {title}
    </button>
  );
};

const genres = [
  { title: "Country", size: 2 },
  { title: "Jazz", size: 3 },
  { title: "Pop", size: 2 },
  { title: "Classical", size: 3 },
  { title: "RnB", size: 1 },
  { title: "Techno", size: 1 },
  { title: "Soul", size: 1 },
  { title: "Disco", size: 3 },
  { title: "Urban", size: 1 },
  { title: "Funk", size: 3 },
  { title: "Grime", size: 1 }
];

export default Container;
