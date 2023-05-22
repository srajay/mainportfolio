import React from "react";
import { motion } from "framer-motion";
import "./projectbox.css";

const ProjectBox = ({ filteredProducts }) => {
  return (
    <>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <motion.div
            layout
            key={product.id}
            className="product-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-container">
              <img src={product.images} alt={product.pname} />
              <div className="overlay">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
              </div>
            </div>

            <h2>{product.pname}</h2>
            <p>{product.language}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectBox;
