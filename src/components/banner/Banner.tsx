import styles from "./banner.module.scss"
import { CSSProperties } from 'react';
import { lato } from "@/lib/fonts";

const Banner = () => {
  return (
    <section className="section container mx-auto">
      <div className="flex items-center justify-center">
        <div className="relative w-full h-[420px] bg-glitch bg-no-repeat opacity-40 xs:opacity-85 rounded-md"></div>
        <div className={`absolute ${lato.className} select-none xs:bg-background/60 xs:px-[4rem] xs:py-[2rem] md:px-[7rem] md:py-[2rem] lg:px-[20rem] rounded-md`}>
          <span className="flex justify-start text-xl font-thin">official</span>
          <div className={`h1 grid ${styles.stack}`} style={{ '--stacks': 3 } as CSSProperties}>
            <span style={{ '--index': 0 } as CSSProperties}>M.A.G</span>
            <span style={{ '--index': 1 } as CSSProperties}>M.A.G</span>
            <span style={{ '--index': 2 } as CSSProperties}>M.A.G</span>
          </div>
          <span className="flex justify-end text-xl font-thin">website</span>
        </div>
      </div>
    </section>
  )
}

export default Banner