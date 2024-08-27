import cards from "./card_data";

function Card({ aimg, atit, aage, arate, adate, aheart }) {
    return (
        <div className="card_list">

            <div className="card_img">
                <img src={aimg} alt={atit} />
            </div>
            <div>
                <span className="card_age">{aage}</span>
                <h3 className="card_tit">{atit}</h3>
            </div>
            <div>
                <span className="card_rate">{arate}%</span>
                <span className="card_date">개봉일 {adate}</span>
            </div>
            <div className="card_btn">
                <button>{aheart}</button>
                <a href="#">예매</a>
            </div>
        </div>
    );
}

export default Card;
