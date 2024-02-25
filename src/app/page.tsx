import Summary from "@/components/summary/Summary";
import Banner from '@/components/banner/Banner';
import ContactMe from "@/components/contact-me/ContactMe";

const Home = () => {
  return (
    <main className="main">
      <Banner />
      <Summary />
      <ContactMe />
    </main>
  )
}

export default Home