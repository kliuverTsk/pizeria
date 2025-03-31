import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const menuItems = [
    {
      category: "Pastas",
      items: [
        { name: "Spaghetti Carbonara", price: "16.99", description: "Pasta con huevo, queso pecorino, panceta y pimienta negra" },
        { name: "Fettuccine Alfredo", price: "15.99", description: "Pasta en salsa cremosa de queso parmesano" }
      ]
    },
    {
      category: "Pizzas",
      items: [
        { name: "Margherita", price: "14.99", description: "Tomate, mozzarella fresca y albahaca" },
        { name: "Quattro Formaggi", price: "17.99", description: "Cuatro quesos selectos italianos" }
      ]
    }
  ];

  return (
    <section className="menu" id="menu">
      <h2>Nuestro Menú</h2>
      <div className="menu-container">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h3>{category.category}</h3>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="item-header">
                    <h4>{item.name}</h4>
                    <span className="price">${item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;