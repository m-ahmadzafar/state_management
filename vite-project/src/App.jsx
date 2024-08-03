import Counter from "./Counter"
import Form from "./Form"
import NameList from "./NameList"
import Reducer from "./Reducer"


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
  <Reducer/>
  <Form/>
  
    </>
  )
}

export default App
