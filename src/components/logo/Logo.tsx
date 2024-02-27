import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="bg-primary lg:hidden p-2"
      />
    </Link>
  )
}

export default Logo