import Counter from "./Counter"
import NameList from "./NameList"


function App() {
 

  return (
    <> <h1>
  As we can see that each instance of the counter is indepedant and holds its own state.
  </h1>
  <div >

  </div>
  <Counter/>
  <Counter/>
  <Counter/>
  <NameList/>
  
    </>
  )
}

export default App
