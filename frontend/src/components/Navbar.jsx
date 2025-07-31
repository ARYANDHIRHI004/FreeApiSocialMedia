import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { ModeToggle } from "./ThemeToggler";

const Navbar = () => {
  const { authUser } = useAuthStore();

  return (
    <nav className="fixed z-10 w-full  p-5 bg-background">
      <div >
        {!authUser ? (
          <div className="flex justify-between items-center">
            <ul className="flex gap-10 text-xl font-[500]">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
            <div className="flex gap-5 items-center">
              <Link to={"/login"}>
                <Button className="cursor-pointer" size={"lg"}>
                  Login
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button
                  className="cursor-pointer"
                  size={"lg"}
                  variant={"secondary"}
                >
                  Login
                </Button>
              </Link>
            <ModeToggle />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Search size={18} />
              <Input placeholder="Search Username" className="w-100" />
            </div>
            <div className="flex gap-5 items-center">
              <Link to={"/profile"}>
                <Button className="cursor-pointer" size={"lg"}>
                  Profile
                </Button>
              </Link>
            <ModeToggle />
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
