import '../styles/Header.css'

import sunIcon from '../icon/sun.png'
import moonIcon from '../icon/moon.png'

import { useEffect, useState } from "react";

function Header() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  const SunIcon = (
    <img 
          src={sunIcon}
          alt="sun" 
          style={{width: '20px', height: 'auto'}} />
  );

  const MoonIcon = (
    <img 
          src={moonIcon}
          alt="moon" 
          style={{width: '20px', height: 'auto'}} />
  );

    return <header>
        <div className="header__00">
            <div className="header__01">ประเสริฐ ตุ่นก่อ</div>
                <ul className="header__02">
                  <li>ผลงาน</li>
                  <li>ติดต่อ</li>

                    <img
                      src={theme === "light" ? moonIcon : sunIcon}
                      alt="Toggle Theme"
                      className="theme-icon"
                      onClick={toggleTheme}
                    />

                    <p>ธีม: {theme === "light" ? "สว่าง" : "มืด"}</p>
    
                </ul>
        </div>
        
    </header>
}

export default Header;