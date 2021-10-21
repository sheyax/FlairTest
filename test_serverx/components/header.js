const Header = () => {
    return ( 
        <div className="headmain">
    <div className="left-align">
        <h3 className="">Corporate</h3>
        <h3>My Projects</h3>
    </div>

    <div className="right-align">
        <a>Logout</a>
         <a>Contact Us</a>

          <a href="#" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
          
    </div>
    </div>

    
    );
}
 
export default Header;