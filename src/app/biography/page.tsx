import Image from "next/image"
import Link from "next/link"

const BiographyPage = () => {
  return (
    <main className="main">
      <section className="section container mx-auto">
        <Image
          src="/bg.jpg"
          alt="image"
          width={440}
          height={440}
          className="object-cover w-full h-full"
        />

        <div className="text-center mt-12">
          <h2 className="h2">M.A.G</h2>
          <p className="">Modernized Android Gyaru</p>
        </div>

        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, fugiat. Animi, beatae quaerat dolores molestiae amet laborum nulla est voluptate molestias id aliquid saepe obcaecati deleniti sed fugiat ducimus eveniet!</p>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, fugiat. Animi, beatae quaerat dolores molestiae amet laborum nulla</p>

        <Link href="/" className="btn mt-4">
          Some link
        </Link>
      </section>
    </main>
  )
}

export default BiographyPage