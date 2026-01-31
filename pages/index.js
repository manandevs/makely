"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Adam",
    message:
      "Makely.art made it so easy to launch my portfolio. I had a beautiful website live in minutes—no coding, no stress.",
    img: "/3.png",
  },
  {
    name: "Isabelle Pascual",
    message:
      "As an emerging artist, having a custom domain and clean layout helped me look professional and land more opportunities.",
    img: "/2.png",
  },
  {
    name: "Felipe",
    message:
      "I love how simple Makely is. Uploading my artwork was fast, and the themes really showcase my style beautifully.",
    img: "/1.png",
  },
]

export default function Home() {
  return (
    <motion.div
      className="w-full mx-auto bg-[#f3f4f5] px-4 sm:px-8 md:px-12 lg:px-[72px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* NAVIGATION */}
      <motion.nav
        className="w-full h-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center pt-8 sm:pt-12 md:pt-16 lg:pt-[104px] space-y-4 sm:space-y-6 lg:space-y-0">
          <motion.div
            className="inline-block px-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.075] font-[700] font-inter bg-white px-1">
              MAKELY
            </h1>
          </motion.div>
          <motion.div
            className="text-center lg:text-right"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-base sm:text-lg md:text-xl lg:text-[21px] font-normal text-[#5a5a5a]">
              <Link href="/create-profile" className="hover:underline">
                Register
              </Link>
              <Link href="/create-profile" className="ml-4 sm:ml-6 hover:underline">
                Login
              </Link>
            </div>
            <div className="mt-2 text-base sm:text-lg md:text-xl lg:text-[21px]">
              <Link href="/" className="hover:underline">
                HOME
              </Link>
              <span className="mx-2 sm:mx-3 text-gray-400">|</span>
              {/* This links to the Pricing section further down this page */}
              <a href="#pricing" className="hover:underline">
                PRICING
              </a>
              <span className="mx-2 sm:mx-3 text-gray-400">|</span>
              <Link href="/create-profile" className="hover:underline">
                START FREE
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <motion.section
        id="hero"
        className="min-h-screen space-y-12 pt-40 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          YOUR NAME, YOUR ART GALLERY
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-[36px] tracking-wide w-full max-w-[1200px] mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Show the world your art. Launch a professional website in minutes— with zero coding.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5"
        >
          <Link
            href="#"
            className="bg-black text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase px-8 sm:px-12 md:px-14 lg:px-16 py-3 sm:py-4 lg:py-[22px] rounded-full"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        id="how-it-works"
        className="max-w-7xl w-full mx-auto min-h-screen snap-start flex flex-col justify-center items-center space-y-8 sm:space-y-12 lg:space-y-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold mb-4 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h1>
        <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between text-left space-y-8 sm:space-y-12 lg:space-y-0">
          {[
            {
              input: "TYPE YOUR NAME...",
              title: "1. Enter Your Name",
              description: "Type your name and we'll suggest a beautiful domain.",
              isButton: false,
            },
            {
              input: "PUBLISH",
              title: "2. Launch Instantly",
              description: "Preview and publish your portfolio site in seconds.",
              isButton: true,
            },
            {
              input: "YOURNAME.com",
              title: "3. Go Premium",
              description: "Upgrade anytime to use your own domain and customizations.",
              isButton: false,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-full lg:w-[360px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative inline-block w-full sm:w-64">
                {item.isButton ? (
                  <motion.button
                    className="w-full px-3 py-2 font-[600] text-sm sm:text-[16px] rounded-xl bg-transparent border-[2px] border-black"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.input}
                  </motion.button>
                ) : (
                  <motion.input
                    className="w-full px-3 py-2 text-lg sm:text-xl rounded-xl bg-transparent border-[2px] border-black placeholder-black text-base sm:text-[18px] font-bold"
                    placeholder={item.input}
                    whileFocus={{ scale: 1.02 }}
                  />
                )}

                {index === 1 && (
                  <div className="absolute top-0 right-2">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="40px"
                      width="40px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-semibold mb-2 mt-4 sm:mt-6 lg:mt-7">
                {item.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-[22px] text-[#3a4b67]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#"
            className="bg-black text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase px-8 sm:px-12 md:px-14 lg:px-16 py-3 sm:py-4 lg:py-5 rounded-full"
          >
            Start Free
          </Link>
        </motion.div>
      </motion.section>

      {/* BENEFITS */}
      <motion.section
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl w-full h-screen snap-start flex flex-col justify-center text-black">
          <div className="max-w-7xl w-full">
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold mb-4 sm:mb-6 tracking-wide"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              BENEFITS
            </motion.h2>
            <motion.ul
              className="list-disc pl-5 space-y-2 text-lg sm:text-xl md:text-2xl lg:text-2xl font-[100] tracking-wide text-[#282828]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                "Turn your name into a brand.",
                "Launch a stunning art website in minutes with zero hassle.",
                "You create. We build.",
                "Hosting, themes, and setup—done for you.",
                "Start free. Grow when you're ready.",
                "From custom subdomain to your own .art domain, and then your own e-commerce, it's all possible.",
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {benefit}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-[500] tracking-wide text-black mt-8 sm:mt-12 lg:mt-16 text-center sm:text-center md:text-center lg:text-end lg:mr-72"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              all in few minutes...
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* NAME SECTION */}
      <motion.section
        className="min-h-screen flex items-center justify-center bg-[#e2e8e1]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative max-w-7xl w-full h-auto text-black">
          <div className="max-w-full sm:max-w-full md:max-w-full lg:max-w-[600px] text-center z-10">
            <motion.h2
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[130px] leading-tight sm:leading-tight md:leading-tight lg:leading-[115px] font-bold mb-4 sm:mb-6 tracking-wide"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              YOUR
              <br /> NAME
            </motion.h2>
            <motion.p
              className="font-[600] text-lg sm:text-xl md:text-2xl lg:text-[29px]"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              From custom subdomain to your own .art domain, and then your own e-commerce.
            </motion.p>
            <motion.div
              className="bg-black text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase mt-8 sm:mt-12 lg:mt-16 px-12 sm:px-16 md:px-20 lg:px-24 py-3 sm:py-4 lg:py-5 inline-block rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.div>
          </div>
          <motion.div
            className="w-auto absolute right-0 -top-16 sm:-top-20 md:-top-24 lg:-top-28 hidden sm:block"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/girl.png"
              alt="girl"
              width={400}
              height={400}
              className="sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        id="testimonials"
        className="min-h-screen flex flex-col justify-center items-center text-[#0a0a0a] snap-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="py-16 sm:py-24 max-w-7xl w-full overflow-hidden">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-center sm:text-4xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Testimonials
          </motion.h2>
          <div className="mt-8 sm:mt-16 grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ name, message, img }, i) => (
              <motion.div
                key={i}
                className="flex flex-col border border-[#b3b4b5] p-4 sm:p-6 max-w-full sm:max-w-[400px] mx-auto"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <blockquote className="flex-grow">
                  <p className="text-base sm:text-lg md:text-xl lg:text-[20px] tracking-wide font-medium">{message}</p>
                </blockquote>
                <footer className="min-h-[80px] sm:min-h-[100px] flex justify-between items-end mt-12 sm:mt-16 lg:mt-20">
                  <div className="text-sm sm:text-[16px] font-semibold uppercase tracking-wider">{name}</div>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    <Image
                      className="ml-auto h-[72px] w-[72px] sm:h-[92px] sm:w-[92px] rounded-full object-cover object-center"
                      src={img || "/placeholder.svg"}
                      alt={name}
                      width={200}
                      height={200}
                    />
                  </motion.div>
                </footer>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.div
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl min-h-screen flex flex-col justify-center">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight tracking-tighter text-black"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Introducing the Pro Plan
          </motion.h1>
          <motion.div
            className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex flex-col justify-center items-center mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-start">
              <span className="text-sm sm:text-[16px] font-medium uppercase text-balance text-gray-700">
                TURN YOUR PORTFOLIO INTO A STOREFRONT WITH MAKELY PRO
              </span>
              <br />
              <span className="mt-2 text-base sm:text-lg font-medium uppercase tracking-[0.12em] text-gray-700">
                FROM "<span className="font-bold text-black">INQUIRE NOW</span>" TO "
                <span className="font-bold text-black">BUY NOW</span>" IN ONE SIMPLE CLICK.
              </span>
            </div>
          </motion.div>
          <motion.div
            className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[28px] italic uppercase tracking-[0.05em] text-black">
              COMING SOON
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        className="max-w-7xl flex flex-col justify-center items-center mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          PRICING
        </motion.h2>

        {/* Mobile/Tablet Pricing Cards */}
        <motion.div
          className="w-full mt-6 lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            {[
              {
                title: "Free",
                price: null,
                features: [
                  { label: "Domain:", value: "yourname.makely.art" },
                  { label: "Templates:", value: "Basic Theme" },
                  { label: "Artwork Uploads:", value: "Up to 5 artworks" },
                  { label: "Blog:", value: "1 Blog post" },
                  { label: "E-commerce:", value: "-" },
                ],
              },
              {
                title: "Premium",
                price: "12$ monthly / 120$ yearly",
                features: [
                  { label: "Domain:", value: "Custom Domain" },
                  { label: "Templates:", value: "Premium Templates" },
                  { label: "Artwork Uploads:", value: "Up to 100 artworks" },
                  { label: "Blog:", value: "Up to 100 blog posts" },
                  { label: "E-commerce:", value: "-" },
                ],
              },
              {
                title: "Pro (Coming Soon)",
                price: null,
                features: [
                  { label: "Domain:", value: "Custom Domain" },
                  { label: "Templates:", value: "Premium/Pro Templates" },
                  { label: "Artwork Uploads:", value: "Unlimited Artworks" },
                  { label: "Blog:", value: "Unlimited Blog Posts" },
                  { label: "E-commerce:", value: "Included" },
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 rounded-lg p-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold text-black text-center mb-4">{plan.title}</h3>
                {plan.price && <p className="text-xs text-gray-500 text-center mt-1 mb-4">{plan.price}</p>}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex justify-between">
                      <span className="font-semibold">{feature.label}</span>
                      <span className="text-gray-700">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Desktop Pricing Table - keep existing structure but wrap in motion.div */}
        <motion.div
          className="w-full border border-[white] overflow-hidden mt-6 hidden lg:block"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Keep all existing desktop table content exactly the same */}
          {/* Header Row */}
          <div className="grid grid-cols-11 items-center">
            <div className="col-span-2 p-5 h-full"></div>
            <div className="col-span-3 p-5 text-center border-l border-[white] h-full flex flex-col justify-center">
              <h2 className="text-xl font-bold text-black">Free</h2>
            </div>
            <div className="col-span-3 p-5 text-center border-l border-[white] h-full flex flex-col justify-center">
              <h2 className="text-xl font-bold text-black">Premium</h2>
              <p className="text-xs text-gray-500 mt-1">12$ monthly / 120$ yearly</p>
              <div className="relative w-[52px] h-[28px] bg-gray-200 rounded-full mx-auto mt-2 p-1 flex items-center">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="col-span-3 p-5 text-center border-l border-[white] h-full flex flex-col justify-center">
              <h2 className="text-xl text-black">
                <span className="font-bold">Pro</span> (Coming Soon)
              </h2>
            </div>
          </div>
          {/* Domain Row */}
          <div className="grid grid-cols-11 border-t border-[white] items-center">
            <div className="col-span-2 p-5 font-bold text-center text-black">Domain</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">yourname.makely.art</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Custom Domain</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Custom Domain</div>
          </div>
          {/* Templates Row */}
          <div className="grid grid-cols-11 border-t border-[white] items-center">
            <div className="col-span-2 p-5 font-bold text-center text-black">Templates</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Basic Theme</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Premium Templates</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">
              Premium/Pro Templates
            </div>
          </div>
          {/* Artwork Uploads Row */}
          <div className="grid grid-cols-11 border-t border-[white] items-center">
            <div className="col-span-2 p-5 font-bold text-center text-black">Artwork Uploads</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Up to 5 artworks</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Up to 100 artworks</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Unlimited Artworks</div>
          </div>
          {/* Blog Row */}
          <div className="grid grid-cols-11 border-t border-[white] items-center">
            <div className="col-span-2 p-5 font-bold text-center text-black">Blog</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">1 Blog post</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Up to 100 blog posts</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Unlimited Blog Posts</div>
          </div>
          {/* E-commerce Row */}
          <div className="grid grid-cols-11 border-t border-[white] items-center">
            <div className="col-span-2 p-5 font-bold text-center text-black">E-commerce</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">-</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">-</div>
            <div className="col-span-3 p-5 text-center border-l border-[white] text-gray-700">Included</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#"
            className="inline-block bg-black text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase px-8 sm:px-12 md:px-14 lg:px-16 py-3 sm:py-4 lg:py-5 rounded-full mx-auto mt-6 sm:mt-8"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center font-bold text-black uppercase space-y-1 tracking-wider text-base sm:text-lg font-sans"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {["FOOTER", "CONTACT EMAIL", "TERMS & PRIVACY", "LOGO"].map((item, index) => (
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
      </motion.footer>
    </motion.div>
  )
}
