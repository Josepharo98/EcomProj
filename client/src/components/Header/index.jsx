// /components/Header/index.jsx
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>
        <Link to="/">Basic Store</Link>
      </h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
