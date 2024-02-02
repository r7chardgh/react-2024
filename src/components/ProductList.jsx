import React from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
const ProductList = () => {
  const listItems = products.map((item) => (
    <li key={item.id} style={{ color: item.isFruit ? "magenta" : "darkgreen" }}>
      {item.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default ProductList;
