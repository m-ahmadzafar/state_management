import Counter from "./Counter"
import Effect from "./Effect"
import Form from "./Form"
import Reducer from "./Reducer"
import State from "./State"


function App() {
 

  return (
    <> <h1>
  As we can see that each instance of the counter is indepedant and holds its own state.
  </h1>
  <div >

  </div>
  <Counter/>
  <Counter/>
  <State/>
  <Reducer/>   
  <Form/>
  <Effect/>
  
    </>
  )
}

export default App
