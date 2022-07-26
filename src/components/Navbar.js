import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div data-testid='navbar'>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </div>
  );
}
