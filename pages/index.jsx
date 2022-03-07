import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className='texto'>
        <p> Feliz dia da Mulher, Amor</p>
      </div>
      <div className="center">        
        <svg  className='heart' width="560" height="512" viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6.71573" y="35" width="40" height="40" transform="rotate(-45 6.71573 35)" fill="white" />
          <circle cx="20" cy="20" r="20" fill="white" />
          <circle cx="50" cy="20" r="20" fill="white" />
        </svg>     

      </div>
      
      <footer className='rodape'>
        <p className='fim'>Com Amor,</p>
        <p className='fim'>De: Gabriel</p>
        <p className='fim'>Para: Nicole</p>
      </footer>

    </div>
  )
}
