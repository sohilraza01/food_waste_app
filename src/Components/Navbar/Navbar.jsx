import './Navbar.css';
import navProfile from '../../assets/nav-profile.svg';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>Donor Panel</h2>
            <img src={navProfile} alt="" className="nav-profile" />
        </div>
     );
}
 
export default Navbar;