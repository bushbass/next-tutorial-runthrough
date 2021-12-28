import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Header() {
  return (
    <header className={styles.header}>
      <h4>the green line and above is the header</h4>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/plain-page'>
            <a>Plain page</a>
          </Link>
        </li>
        <li>
          <Link href='/withSimpleProps'>
            <a>page with simple props</a>
          </Link>
        </li>
        <li>
          <Link href='/withSimplePropsFromAPI'>
            <a>page with simple props from API</a>
          </Link>
        </li>
        <li>
          <Link href='/users'>
            <a>list all users</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
