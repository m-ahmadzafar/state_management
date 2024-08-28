import Callback from "./Callback"
import Counter from "./Counter"
import Effect from "./Effect"
import Form from "./Form"
import Memo from "./Memo"
import Reducer from "./Reducer"
import Ref1 from "./Ref1"
import Ref2 from "./Ref2"
import State from "./State"
import { ThemeProvider } from "./ThemeContext"


function App() {
 
// here we will use useContext for global context.
// currently, its for theme.
  return (
<ThemeProvider>
    <>
    <h1>
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
    <Ref1/>
    <Ref2/>
    <Memo/>
    <Callback/>
    </>
    </ThemeProvider>
  )
}

export default App
