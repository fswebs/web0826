// 확장자 .js 또는 .jsx는 생략 가능
import Card from "./Card";
import cards from "./card_data";

// App 컴포넌트
function App() {
    return (
        <ul className="container">
            {cards.map((item, idx) => (
                <Card 
                    key={idx}
                    mimg={item.cimg} 
                    mtit={item.ctit} 
                    mage={item.cage} 
                    mrate={item.crate} 
                    mdate={item.cdate} 
                    mheart={item.cheart} 
                />
            ))}
        </ul>
    );
}

// 모듈화
// 내보내기
// export default 컴포넌트명;
export default App;
