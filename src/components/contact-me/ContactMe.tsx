import Button from "@/ui/Button"
import { motion } from "framer-motion"

const ContactMe = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <section className="section container mx-auto">
      <div className="data">
        <h3 className="h3">Contact Me</h3>
        <p className="text-muted-foreground pt-1">In case of important negotiations. Only really important.</p>
      </div>


    </section>
  )
}

export default ContactMe