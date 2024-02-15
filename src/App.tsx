import Box from "./components/Box"

const App = () => {
  return (
    <div>
        <Box 
            heading="Learn Typescript" 
            title="Learning with practice make it very easy to learn new technology"
            func1={()=>{alert("Hello Typescript")}}
            />
    </div>
  )
}

export default App
