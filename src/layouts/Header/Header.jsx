import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Журнал геодезических работ</h1>
    </div>
  )
}

export default Header