import React from 'react'
import styles from '../styles/DarkMode.module.css'

const Cart = ({ cart }) => {
  return (
    <div className={styles.cartSection}>
      <h2>Shopping Cart</h2>
      <ul className={styles.cartList}>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cart.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart