import styles from './Card.module.css'

function Card({ title, children }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}

export default Card
