import Image from "next/image";

const ServerTopicbar = () => {
  return (
    <div className="h-full w-full max-w-[280px] relative bg-neutral-700 -z-20">
      <header className="pointer-events-none relative h-[160]">
          <h1 className="z-10 px-4 pt-2 text-xl font-semibold">Berri Community</h1>
        <Image
          width={500}
          height={500}
          src="https://picsum.photos/600"
          alt="Community banner"
          className="absolute inset-0 w-full h-full opacity-35 object-cover -z-10"
        />
      </header>
    </div>
  );
};

export default ServerTopicbar
