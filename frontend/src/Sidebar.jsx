import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
   <section className="sidebar">
            <button>
                <img src="src/assets/blacklogo.png" alt="gpt logo" className="logo"></img>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <ul className="history">
                <li>history1</li>
                <li>history2</li>
                <li>history3</li>
            </ul>

            <div className="sign">
                <p>By ApnaCollege &hearts;</p>
            </div>
        </section>
  );
}
