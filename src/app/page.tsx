import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/hero/hero";
import About from "@/components/about/about";

import Rooms from "@/components/rooms/rooms";
import Amenities from "@/components/amenities/amenities";

import Dining from "@/components/dining/dining";
import Experiences from "@/components/experiences/experiences";
import Events from "@/components/events/events";

import Gallery from "@/components/gallery/gallery";
import Testimonials from "@/components/testimonials/testimonials";
import Location from "@/components/location/location";

import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Rooms />

        <Amenities />

        <Dining />

        <Experiences />

        <Events />

        <Gallery />

        <Testimonials />

        <Location />

        <Contact />
      </main>

      <Footer />
    </>
  );
}