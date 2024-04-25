import styled from "styled-components";


function App() {
  return (
   <MainContainer>
    <div className="container mx-auto px-3 bg-yellow-300">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-green-500">Hello HAMON</h1>
    </div>
   </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`