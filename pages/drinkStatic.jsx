function DrinkStatic({ data }) {
  return (
    <div>
      {console.log(data)}
      <h1>getStaticProps</h1>
      <img src={data.message} />
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

export default DrinkStatic
