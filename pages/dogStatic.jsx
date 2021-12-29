import Image from 'next/image'
function DogStatic({ data }) {
  return (
    <div>
      {console.log(data)}
      <h1>getStaticProps</h1>
      <Image width='200' height='200' alt='random dog' src={data.message} />
    </div>
  )
}

export async function getStaticProps() {
  const dog = await fetch('https://dog.ceo/api/breeds/image/random').then(
    (response) => response.json()
  )
  return {
    props: { data: dog },
  }
}

export default DogStatic
