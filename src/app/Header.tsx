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
      
    </div>
  )
}

export default Header
