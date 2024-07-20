import React from 'react'
import { Link } from 'react-router-dom'

function MenuApp() {

    // event functions
    const show_tools = () => {
        document.getElementById("tools").classList.toggle("activate")
        document.getElementById("access").classList.toggle("active")
    }

    window.addEventListener("keypress", (event) =>{
        if(event.keyCode === 17){
            document.getElementById("tools").classList.remove("activate")
            document.getElementById("access").classList.remove("active")
            alert("Hi")
        }
    })
    return (
        <div>
            <div className="menu_container">
                {/* menu left start */}
                <div className="menu_left_container">
                    <div className="profile">
                        <div className="img_profile">
                            <img src="https://cdn.pixabay.com/photo/2024/03/05/20/13/girl-8615258_1280.jpg" alt="algo" />
                        </div>
                        <div className="about_profile">
                            <p className='subtitle'>Joe Doe</p>
                            <p className='about_profession_profile'>Ing. software</p>
                        </div>
                    </div>
                    <div className="links">
                        <div className="link home">
                            <ion-icon name="home-outline"></ion-icon>
                            <Link to="/">Home</Link>
                        </div>
                        <div className="link source">

                            <ion-icon name="cash-outline"></ion-icon>
                            <Link to="/">Resources</Link>
                        </div>
                        <div className="link plantations">
                            <ion-icon name="leaf-outline"></ion-icon>
                            <Link to="/">Plantations</Link>
                        </div>
                        <div className="link activities">
                            <ion-icon name="analytics-outline"></ion-icon>
                            <Link to="/">Activities</Link>
                        </div>
                        <hr />


                        <div className="link schedule_activity">
                            <ion-icon name="calendar-outline"></ion-icon>
                            <Link to="/">Schedule Activity</Link>
                        </div>

                        <div className="link statistics">
                            <ion-icon name="bar-chart-outline"></ion-icon>
                            <Link to="/">Statistics</Link>
                        </div>

                        <div className="link inventory">
                            <ion-icon name="file-tray-stacked-outline"></ion-icon>
                            <Link to="/">Inventory</Link>
                        </div>
                        <div className="link alerts">
                            <ion-icon name="chatbox-outline"></ion-icon>
                            <Link to="/">Alerts</Link>
                        </div>



                        <div className="link help">
                            <ion-icon name="help-buoy-outline"></ion-icon>
                            <Link to="/">Help</Link>
                        </div>
                    </div>
                </div>
                {/* menu left end */}
                {/* menu top start */}
                <div className="menu_top_container">
                    <div className="today" style={{marginRight: "25%"}}>
                        <div className="subtitle" style={{ color: "#ffff" }}>Today, 16 Jun</div>
                    </div>
                    <div className="search_app_container">
                        <input type="search" placeholder='Type here to search...' /> <button><ion-icon name="search-outline"></ion-icon></button>
                    </div>
                    <div className="change_theme" id='change'>
                        <ion-icon name="sunny-outline"></ion-icon>
                    </div>
                </div>
                {/* menu top end */}
                {/* access menu start */}
                <div className="access_menu_container">

                    <div className="access_box" id='access'>
                        <Link to="/"><ion-icon name="bookmarks-outline"></ion-icon></Link>
                        <hr />
                        <Link to="/"><ion-icon name="cafe-outline"></ion-icon></Link>
                    </div>
                    <div className='tools_box' id='tools' onClick={show_tools}><ion-icon name="settings-outline"></ion-icon></div>
                </div>
                {/* access menu end */}
            </div>
        </div>
    )
}

export default MenuApp
