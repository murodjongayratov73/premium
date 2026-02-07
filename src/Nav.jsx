import React from "react";
function Nav({ handleChange, laet }) {

  const SunIcon = (
    <svg width="25px" height="25px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48H0z" fill="none"/>
      <g id="Shopicon">
        <circle cx="24" cy="24" r="10" fill="white"/>
        <rect x="22" y="4" width="4" height="6" fill="white"/>
        <rect x="22" y="38" width="4" height="6" fill="white"/>
        <rect x="4" y="22" width="6" height="4" fill="white"/>
        <rect x="38" y="22" width="6" height="4" fill="white"/>
        <rect x="13.5" y="6.278" transform="matrix(0.866 -0.5 0.5 0.866 -2.5623 8.9935)" width="4" height="6" fill="white"/>
        <rect x="30.5" y="35.722" transform="matrix(0.866 -0.5 0.5 0.866 -15.0067 21.4372)" width="4.001" height="6" fill="white"/>
        <rect x="6.277" y="30.5" transform="matrix(0.866 -0.5 0.5 0.866 -15.0068 8.9926)" width="6" height="4.001" fill="white"/>
        <rect x="35.722" y="13.5" transform="matrix(0.8661 -0.4999 0.4999 0.8661 -2.5628 21.4339)" width="6" height="4.001" fill="white"/>
        <rect x="7.277" y="12.5" transform="matrix(0.5 -0.866 0.866 0.5 -8.7847 15.7846)" width="4.001" height="6" fill="white"/>
        <rect x="36.722" y="29.5" transform="matrix(0.5 -0.866 0.866 0.5 -8.7845 49.7849)" width="4.001" height="6" fill="white"/>
        <rect x="12.5" y="36.722" transform="matrix(0.5 -0.866 0.866 0.5 -25.7843 32.7831)" width="6" height="4" fill="white"/>
        <rect x="29.5" y="7.277" transform="matrix(0.5001 -0.866 0.866 0.5001 8.2139 32.7828)" width="5.999" height="4.001" fill="white"/>
      </g>
    </svg>
  );

  const MoonIcon = (
    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8.00002C0 4.75562 1.93132 1.9623 4.70701 0.707031L5.65436 1.65438C5.2352 2.51383 5 3.47946 5 4.50002C5 8.08987 7.91015 11 11.5 11C12.5206 11 13.4862 10.7648 14.3456 10.3457L15.293 11.293C14.0377 14.0687 11.2444 16 8 16C3.58172 16 0 12.4183 0 8.00002Z" fill="#000000" />
      <path d="M11.5 7.00003L9 4.50003L11.5 2.00003L14 4.50003L11.5 7.00003Z" fill="#000000" />
    </svg>
  );

  return (
    <nav>
      <div className='nav-1'>
        <h1>STOREFRONT</h1>
        <ul>
          <li>Mew arrivals</li>
          <li>Mam</li>
          <li>Women</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className='nav-2'>
        <article className='input-box'>
          <button className='input-btn'>
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208 0-220.912-179.088-400-400-400s-400 179.088-400 400 179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0 12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z" /></svg>
          </button>
          <input placeholder='Search product...'></input>
        </article>
        <article className='card-prs'>
          <button className='btn-box'>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4856 1.12584C12.1836 0.958052 11.8164 0.958052 11.5144 1.12584L2.51436 6.12584L2.5073 6.13784L2.49287 6.13802C2.18749 6.3177 2 6.64568 2 7V16.9999C2 17.3631 2.19689 17.6977 2.51436 17.874L11.5022 22.8673C11.8059 23.0416 12.1791 23.0445 12.4856 22.8742L21.4856 17.8742C21.8031 17.6978 22 17.3632 22 17V7C22 6.64568 21.8125 6.31781 21.5071 6.13813C21.4996 6.13372 21.4921 6.12942 21.4845 6.12522L12.4856 1.12584ZM5.05923 6.99995L12.0001 10.856L14.4855 9.47519L7.74296 5.50898L5.05923 6.99995ZM16.5142 8.34816L18.9409 7L12 3.14396L9.77162 4.38195L16.5142 8.34816ZM4 16.4115V8.69951L11 12.5884V20.3004L4 16.4115ZM13 20.3005V12.5884L20 8.69951V16.4116L13 20.3005Z" fill="#0F0F0F" />
            </svg>
          </button>
          <button className='btn-savad'>

            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80z" /></svg>
          </button>
          <button
            className="moon-sun"
            onClick={handleChange}>
            {laet ? SunIcon : MoonIcon}
          </button>
        </article>
      </div>
    </nav>
  );
}

export default Nav;