import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="container">
          {cards.map((card, index) => (
              <Card
                  key={index}
                  aimg={card.cimg}
                  atit={card.ctit}
                  aage={card.cage}
                  arate={card.crate}
                  adate={card.cdate}
                  aheart={card.cheart}
              />
          ))}
      </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
