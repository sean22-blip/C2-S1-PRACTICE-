import pnLogo from "../assets/pn-logo.png";
let batchName = "Generation 11";
function Header(props) {
    return (
        <header id="header">
            <img src={pnLogo} alt="PN Logo" />
            <h1>Students results for {props.batchName}</h1>
        </header>

    )
}
export default Header;