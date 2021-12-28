import { nameData } from '../fakeData'

function WithSimpleProps({ data }) {
  return (
    <div>
      <h1>getStaticProps</h1>
      <p>the info in the list below is from an outside source</p>
      <ul>
        {data.map((entry) => (
          <li
            key={
              entry.lastName
            }>{`${entry.firstName} ${entry.lastName} - ${entry.state}`}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { data: nameData },
  }
}

export default WithSimpleProps
