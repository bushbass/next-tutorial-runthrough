import { nameData } from '../fakeData'
import User from '../components/User'

function WithSimplePropsFromAPI({ data }) {
  return (
    <div>
      <h1>getStaticProps from API</h1>
      <p>the info in the list below is from an outside source</p>
      <ul>
        {data.map((entry) => (
          <User entry={entry} />
        ))}
      </ul>

      {console.log(data)}
    </div>
  )
}

export async function getStaticProps() {
  const userData = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then((response) => response.json())
  userData.length = 10
  return {
    props: { data: userData },
  }
}

export default WithSimplePropsFromAPI
