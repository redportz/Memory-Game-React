import Multiplayer_switch from "./multiplayer_switch"

function Menu() {
    
    return(
        <div className="menu-container">
            <button className="menu-btn" aria-label="Open Menu">
                <i className="fa-solid fa-bars"></i>
              </button>
            
            <div className="menuItems">
                <Multiplayer_switch />
            </div>
        </div>
    )
}

export default Menu