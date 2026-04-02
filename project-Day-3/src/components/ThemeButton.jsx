import { useState } from 'react'
import styles from './ThemeButton.module.css'

function ThemeButton() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      className={`${styles.base} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default ThemeButton
