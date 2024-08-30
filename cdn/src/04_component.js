/*  
    컴포넌트(구성요소)?
        HTML 요소를 반환하는 함수와 같다.
        독립적이고 재사용 가능한 코드 조각
        -> 반환(return), 독립적, 재사용
        -> 독립적 -> 별도의 파일로 만들어 사용!

        종류
            1. 클래스형 컴포넌트 -> Hooks 지원x
            2. 함수형 컴포넌트 -> Hooks 지원o

        -> 이전 React 코드 기반에서는 Class 컴포넌트가 주로 사용되는 것을 볼 수 있습니다. 이제 React 16.8에 추가된 Hooks와 함께 Function 컴포넌트를 사용하는 것이 좋습니다.

    1. 컴포넌트 형식
      function 컴포넌트(){
        return (
            HTML 요소
        );
      }

      가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
      나. return 키워드 필수!
*/

// 클래스형 컴포넌트
// 상속(extends) 필요, render() 필요
class Comp0 extends React.Component {
    render() {
        return <h2>난 클래스형 컴포넌트야!</h2>;
    }
}

// 함수형 컴포넌트
// 상속 없다. render() 없다.
function Comp1() {
    return <h2>난 함수형 컴포넌트야!</h2>;
}

// 컴포넌트 생성
function Hello() {
    // 리턴 뒤에 한 줄 문장
    // return <h1>Hello World!</h1>
    // 리턴 뒤에 두 줄 이상의 문장은 ( ); 로 묶고 문장 끝 ; 쓴다.
    return (
        <div className="card_list">
            <div className="card_img">
                <img
                    src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg"
                    alt="사랑의 하츄핑"
                />
            </div>
            <div>
                <span className="card_age">All</span>
                <h3 className="card_tit">사랑의 하츄핑</h3>
            </div>
            <div>
                <span className="card_rate">예매율 1%</span>
                <span className="card_date">개봉일 2024.08.07</span>
            </div>
            <div className="card_btn">
                <button>487</button>
                <a href="#">예매</a>
            </div>
        </div>
    );
}

// function App(){
//   return (
//     <div style={{display: "flex"}}>
//       <Hello />
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   );
// }

const container0 = document.querySelectorAll(".item").item(0);
const root0 = ReactDOM.createRoot(container0);
root0.render(<Comp0 />);

const container1 = document.querySelectorAll(".item").item(1);
const root1 = ReactDOM.createRoot(container1);
root1.render(<Comp1 />);