//import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar'
import Card from './components/Card';
import Footer from './components/Footer'
import Data from './data';
function App() {
  const mapData = Data.map(item => {
    return <Card 
    key = {item.id}
    item = {item}
    />
  })
  return (
    <div className="App">
      <NavBar />
      <section className="card--list">
        {mapData}
      </section>
      <Footer />
    </div>
  );
}
// Note while using the.map method to map through an array this error might occur: Each child in a list should have a unique "key" prop. So to fix we pass a KEY prop(name must be key)
export default App;
