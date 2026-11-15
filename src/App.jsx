import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  // TODO: Implement state for dark mode toggle
  const handleToggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode)
    }
  // TODO: Implement state for cart management
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart
      }
      return [...prevCart, product]
    })
  }

  // TODO: Implement state for category filtering
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>🛒 Shopping App</h1>
          {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
          <DarkModeToggle
            darkMode={darkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />
        </header>
      
        <p className={styles.subtitle}>
            Welcome! Browse groceries, filter by category, and add items to your
            cart.
        </p>


        {/* TODO: Implement category filter dropdown */}
        <div className={styles.filterBar}>
          <label htmlFor="category-filter">Filter by Category: </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className={styles.select}
          >
            <option value="all">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </select>
        </div>

        <ProductList
          selectedCategory={selectedCategory}
          onAddToCart={handleAddToCart}
        />

        {/* TODO: Implement and render Cart component */}
        <Cart cart={cart} />
      </div>
    </div>
  )
}

export default App
