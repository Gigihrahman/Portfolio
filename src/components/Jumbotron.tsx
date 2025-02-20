import Image from "next/image";

const Jumbotron = () => {
  return (
    <section className=" px-4 py-16 md:py-24">
      <div className="container m-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center px-8 pl-[200px]">
            <div className="space-y-4 ">
              <p className="font-semibold ">Hey, I am Gigih Rahmandita</p>
              <p className="text-4xl font-semibold md:text-5xl">
                I Am A Fullstack Developer <br />
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <button className="bg-[#5E3BEE]">Get In Touch</button>
            </div>
          </div>
          <div>
            <div className="relative h-[320px] w-full md:h-[500px]">
              <Image src="/bener.svg" alt="person" objectFit="contain" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
