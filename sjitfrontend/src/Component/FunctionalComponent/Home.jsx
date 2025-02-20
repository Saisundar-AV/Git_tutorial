import Navbar from "./Navbar";

function Home(Properties) {
  var styling = {
    textAlign: "center",
    backgroundColor: "lightblue",
    margin: "0px",
  };
  var s={
    marginTop: "0px",
  };
  var a=10;
  var b="Hello";
  return (
    <>
    <Navbar />
    <div>
      <h1 style={styling}>Home</h1>
      <h2 style={s}>Properties</h2>
      <h2 style={s}>Prop: {a}, {b}</h2>
    </div>
    </>
  );
}

export default Home;