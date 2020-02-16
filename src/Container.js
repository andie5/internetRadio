import React from "react";

const Container = () => {
  const sortedGenres = [...genres];
  sortedGenres.sort((a, b) => b.size - a.size);

  let previousSize;
  let initialSetup = true;

  // Get the initial size for displaying the buttons
  if (sortedGenres.length > 0 && initialSetup) {
    previousSize = sortedGenres[0].size;
    initialSetup = false;
  }

  return (
    <div style={{ padding: 15 }}>
      {sortedGenres.map(item => {
        // Check if the next item is bigger than the previous
        const result =
          item.size !== previousSize ? (
            <>
              <br />
              <ItemButton item={item} />
            </>
          ) : (
            <ItemButton item={item} />
          );
        previousSize = item.size;
        return result;
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
