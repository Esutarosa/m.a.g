import Link from "next/link"

interface ButtonProps {
  path: string
  text: string
  className?: string
}

const Button = ({ path, text, className }: ButtonProps) => {
  return (
    <Link
      href={path}
      className={`btn ${className}`}
    >
      {text}
    </Link>
  )
}

export default Button