function User({ user }) {
  return (
    <div>
      <h2> user page</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.username}</p>
      {/* {console.log(user)} */}
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get users
  const users = await fetch('https://jsonplaceholder.typicode.com/users/').then(
    (res) => res.json()
  )

  // Get the paths we want to pre-render based on users
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))
  console.log('paths', paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the user `id`.
  // If the route is like /users/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const user = await res.json()

  // Pass user data to the page via props
  return { props: { user } }
}

export default User
