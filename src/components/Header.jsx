import { sidebarData } from "../data.js";
import ListComponent from "./ListComponent.jsx";
import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  UserCircleIcon,
  EllipsisVerticalIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import flipkarLogo from "../assets/flipkart-logo-svgrepo-com.svg";

const SideMenu = () => {
  return (
    <div className="drawer z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn drawer-button btn-sm hover:bg-white"
        >
          <Bars3Icon className="size-4" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 flex gap-3 bg-neutral text-white hover:bg-neutral"
            >
              <UserCircleIcon className="size-8" />
              <span className="text-xl">Login</span>
            </div>
          </li>
          <li className="border-b-2 border-black/10 py-5 min-h-[90vh]">
            {sidebarData.map((lists, index) => {
              return (
                <ListComponent
                  title={lists.title}
                  list={lists.list}
                  key={index}
                />
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full flex gap-3 items-center h-[10vh] shadow-md shadow-slate-300/50 fixed top-0 left-0 bg-white z-10">
      <nav className="w-11/12 mx-auto ml-10">
        <ul className="text-black flex items-center gap-x-2">
          <li className="flex items-center lg:hidden">
            <SideMenu />
          </li>
          <li className="flex-1 basis-3">
            <img src={flipkarLogo} alt="company logo" className="size-24" />
          </li>
          <li className="flex-0 md:flex-1">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered md:w-auto bg-blue-100/75"
              />
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover hidden lg:block">
              <div tabIndex={0} role="button" className="btn m-1 flex gap-3">
                <UserCircleIcon className="size-8" />
                <span className="text-xl">Login</span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 rounded-t-none"
              >
                <li className="min-w-full">
                  <div className="flex justify-between w-full">
                    <span className="text-nowrap">New Customer? </span>
                    <button className="btn btn-sm btn-primary">Sign Up</button>
                  </div>
                </li>
                <li className="py-2">My Profile</li>
                <li className="py-2">Flipkart Plus Zone</li>
                <li className="py-2">Orders</li>
                <li className="py-2">Wishlist</li>
                <li></li>
              </ul>
            </div>
          </li>
          <li className="flex px-5 gap-x-10 items-center text-xl">
            <div className="flex gap-3">
              <ShoppingCartIcon className="size-8" />
              Cart
            </div>
            <div className="hidden lg:flex gap-3">
              <BuildingStorefrontIcon className="size-8" />
              Become a Seller
            </div>
            <div className="dropdown dropdown-hover hidden lg:block">
              <div tabIndex={0} role="button" className="btn m-1">
                <EllipsisVerticalIcon className="size-6" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
