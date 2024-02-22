
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = () => (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Service</NavLink>
      <NavLink to="/">Plans</NavLink>
      <NavLink to="/">Blogs</NavLink>
      <NavLink to="/">Suppurt</NavLink>
    </>
  );

  return (
    <div>
    {/* <div className=" flex bg-slate-600 justify-end list-none  space-x-4 px-6">
      <li>Login</li>
      <li>SignUp</li>
    </div> */}
      <div className="flex bg-slate-700 justify-between p-2">
        <div>
          <h1>Click.com</h1>
        </div>
       
        <div className="flex space-x-6 ">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
