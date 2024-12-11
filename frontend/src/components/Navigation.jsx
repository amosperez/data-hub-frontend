import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

const ProfileDropdown = () => {
  return (
    // {/* Profile dropdown */}
    <div className="relative ml-3">
      <div>
        <button
          type="button"
          className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
      </div>

      {/* Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-200"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95" */}

      <div
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        {/* <!-- Active: "bg-gray-100 outline-none", Not Active: "" --> */}
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabindex="-1"
          id="user-menu-item-0"
        >
          Your Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabindex="-1"
          id="user-menu-item-1"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabindex="-1"
          id="user-menu-item-2"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

const NotificationItem = () => {
  return (
    <button
      type="button"
      className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">View notifications</span>
      <svg
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>
    </button>
  );
};

const NavItem = ({ to, label, isActive }) => {
  const baseClasses =
    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium";
  const activeClasses = "border-violet-500 text-gray-900";
  const defaultClasses =
    "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";

  return (
    <NavLink
      to={to}
      end
      className={({ isActive: active }) =>
        `${baseClasses} ${active ? activeClasses : defaultClasses}`
      }
    >
      {label}
    </NavLink>
  );
};

const MobileNavItem = ({ to, label }) => {
  const baseClasses = "block border-l-4 py-2 pl-3 pr-4 text-base font-medium";
  const activeClasses = "border-violet-500 bg-violet-50 text-violet-700";
  const defaultClasses =
    "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";

  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? activeClasses : defaultClasses}`
      }
    >
      {label}
    </NavLink>
  );
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  return (
    <>
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            {/* Mobile menu button ----- start */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block" */}

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* Icon when menu is open.

            Menu open: "block", Menu closed: "hidden" */}

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile menu button ----- end */}

            {/* Left Side ----- start */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <NavItem to="/" label="Home" />
                <NavItem to="/posts" label="Posts" />
              </div>
            </div>
            {/* Right Side ----- end */}

            {/* Right Side ----- start */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {!isAuthenticated && (
                <>
                  <button
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: { screen_hint: "signup" },
                      })
                    }
                    className="ml-6 inline-flex items-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={() => loginWithRedirect()}
                    className="ml-6 inline-flex items-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                  >
                    Login
                  </button>
                </>
              )}

              {isAuthenticated && (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="ml-6 inline-flex items-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  Logout
                </button>
              )}
              {/* <NotificationItem/> */}
              {/* <ProfileDropdown/> */}
            </div>
            {/* Right Side ----- end */}
          </div>
        </div>

        {/* Mobile menu ----- start */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 pb-4 pt-2">
              <MobileNavItem to="/" label="Home" />
              <MobileNavItem to="/posts" label="Posts" />
            </div>
          </div>
        )}
        {/* Mobile menu ----- end */}
      </nav>
    </>
  );
}
