import Link from 'next/link'

function User({ entry }) {
  return (
    <Link href={`/users/${entry.id}`}>
      <a>
        <li
          style={{
            borderBottom: '1px solid black',
          }}>{`ID: ${entry.id} -- Name: ${entry.name} -- Username: ${entry.username} -- Company Name: ${entry.company.name}`}</li>
      </a>
    </Link>
  )
}

export default User
