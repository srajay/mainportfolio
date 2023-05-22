import React, { useState } from "react";

import { Data } from "./Projectdata";
import "./project-filter.css";
import ProjectBox from "./ProjectBox";

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const filteredProducts = activeCategory
    ? Data.filter((product) => product.category === activeCategory)
    : Data;

  return (
    <>
      <div className="project-cat">
        <button
          className={activeCategory === null ? "active" : ""}
          onClick={() => toggleCategory(null)}
        >
          All
        </button>
        <button
          className={activeCategory === "web" ? "active" : ""}
          onClick={() => toggleCategory("web")}
        >
          WEB
        </button>
        <button
          className={activeCategory === "uiux" ? "active" : ""}
          onClick={() => toggleCategory("uiux")}
        >
          UI/UX
        </button>
        <button
          className={activeCategory === "graphic" ? "active" : ""}
          onClick={() => toggleCategory("graphic")}
        >
          GRAPHIC
        </button>
      </div>

      <ProjectBox filteredProducts={filteredProducts} />
    </>
  );
};

export default ProductList;
