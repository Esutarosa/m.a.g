import Logo from "../logo/Logo"
import Links from "./navLinks/NavLinks"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-6">
      <Links />
    </nav>
  )
}

export default Navbar