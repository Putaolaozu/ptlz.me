import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="m-2">
        <figure className="flex justify-center items-center flex-col">
          <div className="lg:w-[250px] w-[200px]">
            <Image
              src="/images/sheeps.jpeg"
              width={300}
              height={300}
              alt="sheep"
              className="object-cover rounded-full"
            />
          </div>

          <figcaption className="mt-4">
            <h2 className="text-xl">葡萄老祖</h2>
          </figcaption>
        </figure>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512">
            <path
              fill="#EEEEEE"
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
          </svg>
          <span className="mx-1">:</span>
          <span className="font-light text-sm">lwx404@outlook.com</span>
        </div>
      </section>
    </>
  );
};

export default About;
