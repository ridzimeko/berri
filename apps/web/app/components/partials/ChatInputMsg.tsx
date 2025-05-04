import { FaFaceSmile } from "react-icons/fa6";

const ChatInputMsg = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaFaceSmile />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-4 rounded-xl bg-gray-600 text-white focus:outline-none focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
        placeholder="Type a message..."
      />
    </div>
  );
};

export default ChatInputMsg;
