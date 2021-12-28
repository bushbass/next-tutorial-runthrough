function DrinkServer({ data }) {
  return (
    <div>
    
      <h1>getStaticProps</h1>
    {console.log(data)}
    </div>
  )
}

export async function getServerProps() {
  const dog = await fetch('https://dog.ceo/api/breeds/image/random').then(
    (response) => response.json()
  )
  return {
    props: { data: dog },
  }
}

export default DrinkServer
