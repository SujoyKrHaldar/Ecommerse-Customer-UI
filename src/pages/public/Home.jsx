import {
  HeroSection,
  HeroCollection,
  // HeroProducts,
} from "../../components/pages";
import { MetaTags } from "../../components/shared";

function Home() {
  return (
    <>
      <MetaTags
        title="Discover the Perfect Blend of Style • Ecommerse"
        description="Login to your accountDiscover the Perfect Blend of Style"
        conicalRoute="/"
      />
      <HeroSection />
      <HeroCollection />
      {/* <HeroProducts /> */}

      {/* <section className="container w-full h-full bg-white overflow-hidden">
        <div className="relative w-full h-[669px] flex items-center">
          <div className="absolute w-full h-[56%] bg-zinc-200 border border-zinc-500 bottom-0 left-0"></div>

          <div className="w-full h-full flex items-center justify-between gap-8 px-16">
            <div className="max-w-sm space-y-8">
              <div className="space-y-4">
                <p className="tag">Subscribe</p>
                <h1 className="leading-[3.5rem]">
                  Join the trend,{" "}
                  <span className="text-orange-700 block">Find more Style</span>
                </h1>
                <p>And get the latest news all in your mail</p>
              </div>

              <div className="flex flex-col gap-4">
                <input
                  className="border border-zinc-500 py-3 px-6 outline-none"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
                <p className="bg-black text-white text-center py-3 px-6 border border-black">
                  Subscribe
                </p>
              </div>
            </div>

            <div className="space-y-4 text-right">
              <p className="tag">Social</p>
              <h2 className="leading-[3.5rem]">Follow us on Socials</h2>
            </div>
          </div>

          <div className="absolute w-[700px] top-0 left-1/2 -translate-x-1/2">
            <img src="/assets/images/model-img.png" alt="" />
          </div>
        </div>
      </section> */}

      {/* <section className="container w-full h-full bg-white overflow-hidden">
        <div className="relative w-full h-[669px] flex items-center">
          <div className="max-w-2xl space-y-1 mx-auto text-center ">
            <p className="tag">Subscribe</p>
            <h2 className="leading-[4rem]">Join the trend, find more style</h2>
            <div className="flex flex-col">
              <input
                className="border-2 border-zinc-500 py-4 px-6 outline-none"
                type="email"
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
