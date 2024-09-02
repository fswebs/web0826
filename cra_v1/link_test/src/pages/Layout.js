import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1 className="logo"><Link to="/">Logo</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">영화</Link></li>
          <li><Link to="/reservation">예매</Link></li>
          <li><Link to="/theater">극장</Link></li>
          <li><Link to="/event">이벤트</Link></li>
          <li><Link to="/store">스토어</Link></li>
          <li><Link to="/membership">혜택</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;