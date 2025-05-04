import ChatInputMsg from "./partials/ChatInputMsg";

const ChatBoxbar = () => {
  return (
    <div className="bg-gray-700 h-full w-full relative">
      <header className="flex items-center justify-between py-2 px-4 bg-gray-800">
        <div>
          <h1>Welcome</h1>
          <p className="text-sm text-gray-200">Introduce yourself here....</p>
        </div>
      </header>
      <main className=""></main>
      <div className="mx-4 absolute bottom-3 inset-x-0">
        <ChatInputMsg />
      </div>
    </div>
  );
};

export default ChatBoxbar;
