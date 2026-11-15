import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ darkMode, onToggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={onToggleDarkMode} className={styles.toggleButton}>
      {/* TODO: Update this text from Dark to Light dynamically */}
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'} 
    </button>
  )
}

export default DarkModeToggle
