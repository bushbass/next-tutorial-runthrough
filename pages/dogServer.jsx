import Image from 'next/image'
function DogServer({ data }) {
  return (
    <div>
      <h2>Dog image with SSR</h2>
      <Image height='200' width='200' alt='random dog' src={data.message} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const data = await res.json()

  // even though this endpoint returns a random data, since this runs at build time
  // if you reload the page after build it will no give a new random data
  //  the random data is only provided once, at build time

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default DogServer
