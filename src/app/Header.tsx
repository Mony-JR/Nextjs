import { data } from "./data"

const Header = () => {
  return (
    <div>
      <h1>Hello TypeScript </h1>
      {data.map((p)=>(
        <div>
            <h1>{p.name}</h1>

        </div>
      ))}
      <h1>Hello Git</h1>
    </div>
  )
}

export default Header
