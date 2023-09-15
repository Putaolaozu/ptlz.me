import Image from "next/image";
import Link from "next/link";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            viewBox="0 0 512 512"
            className="dark:fill-[#77b0ff] fill-blue-500">
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
          <span className="mx-1">:</span>
          <span className="font-light text-sm">lwx404@outlook.com</span>
        </div>
        <div className="flex justify-center items-center">
          <svg width="20" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              className="dark:fill-slate-400 fill-slate-900"
            />
          </svg>
          <span className="mx-1">:</span>
          <Link
            href="https://github.com/Putaolaozu"
            className="font-light text-sm underline text-blue-500 hover:text-blue-400">
            Putaolaozu
          </Link>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-4 justify-center items-center mt-20 opacity-90">
          <p>这里有个好玩的东西</p>
          <Link href="https://lightrans.ptlz.me" className="font-semibold text-lg text-blue-500 hover:text-blue-400">
            一个简洁的翻译web app
          </Link>
          <iframe title="一个简洁的翻译web app" src="https://lightrans.ptlz.me"></iframe>
        </div>
      </section>
    </>
  );
};

export default About;
