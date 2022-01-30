import React from 'react';

function SideBar(){
    return(
        <>
        <div className="container Sidemenu">
        <div className="devchallengess">
         <h1><span>Dev</span>challenges.io</h1>
        </div>
        
        <div className="menuBar">
            <ul className="menuList">
                <li><a href="#">Colors</a></li>
                <li><a href="#">Typography</a></li>
                <li><a href="#">Spaces</a></li>
                <li><a href="#">Buttons</a></li>
                <li><a href="#">Input</a></li>
                <li><a href="#">Grid</a></li>
            </ul>
        </div>
        </div> 
        </>
    )
}

export default SideBar;