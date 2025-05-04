import Image from "next/image";

const ChatSidebar = () => {
  return (
    <aside className="bg-red-400 w-[90px] h-full relative">
      <section className="absolute inset-0 px-2 py-4 flex flex-col items-center gap-3 select-none">
        <div className="flex items-center gap-2 rounded-full overflow-clip hover:animate-radius">
          <Image
            width={68}
            height={68}
            src="https://picsum.photos/300"
            alt="Profile"
          />
        </div>
        <div className="flex items-center gap-2 rounded-full overflow-clip hover:animate-radius">
          <Image
            width={68}
            height={68}
            src="https://picsum.photos/300"
            alt="Profile"
          />
        </div>
        <div className="flex items-center gap-2 rounded-full overflow-clip hover:animate-radius">
          <Image
            width={68}
            height={68}
            src="https://picsum.photos/300"
            alt="Profile"
          />
        </div>
      </section>
    </aside>
  );
};

export default ChatSidebar;
