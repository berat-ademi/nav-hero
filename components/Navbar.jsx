import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              <img
                width="40px"
                height="40px"
                src="https://www.byte24.nl/_next/static/images/logo1-a2a4ca110946359f6e371984edb0f273.png"
                alt=""
              />
            </a>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                class={!navbarOpen ? "fa fa-bars" : "fa fa-times"}
                aria-hidden="true"
              ></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="navbar-items">
              <div className="relative">
                <span className="hover:text-gray-500 cursor-pointer">
                  Diensten
                </span>
                <div className="navbar-options absolute hidden text-gray-700 pt-1 w-full">
                  <div className="navbar-options bg-white shadow rounded py-2 px-4">
                    <a href="#" className="block hover-option">
                      Option 1
                    </a>
                    <a href="#" className="block hover-option">
                      Option 2
                    </a>
                    <a href="#" className="block hover-option">
                      Option 3
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="hover:text-gray-500 cursor-pointer">
                  Producten
                </span>
                <div className="absolute hidden text-gray-700 pt-1 w-full">
                  <div className="navbar-options bg-white shadow rounded py-2 px-4">
                    <a href="#" className="block hover-option">
                      Option 1
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="hover:text-gray-500 cursor-pointer">
                  Case Studies
                </span>
                <div className="absolute hidden text-gray-700 pt-1 w-full">
                  <div className="navbar-options bg-white shadow rounded py-2 px-4">
                    <a href="#" className="block hover-option">
                      Option 1
                    </a>
                    <a href="#" className="block hover-option">
                      Option 2
                    </a>
                    <a href="#" className="block hover-option">
                      Option 3
                    </a>
                  </div>
                </div>
              </div>
              <span>Blog</span>
              <span>Over ons</span>
            </div>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <button className="navbar-btn">Vrijblijvend adviesgesprek</button>

              <button className="contact-btn">Contact</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
