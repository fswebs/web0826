import cards from "./card_data";
import Card from "./card";

function App() {
    return (
        <div style={{ display: "flex" }}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    aimg={card.cimg}
                    atit={card.ctit}
                    aage={card.cage}
                    arate={card.crate}
                    adate={card.cdate}
                />
            ))}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
