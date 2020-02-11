import React from "react";

const Container = () => {
  const sortedGenres = [...genres];
  sortedGenres.sort((a, b) => {
    console.log("a:", a);
    console.log("b:", b);
    return b.size - a.size;
  });

  return (
    <div>
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
        fontSize: 10 + size * 2
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
  { title: "RnB", size: 1 }
];

export default Container;
