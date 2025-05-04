import styles from "./page.module.css";
import ChatSidebar from "./components/ChatSidebar";
import ServerTopicbar from "./components/ServerTopicbar";
import ChatBoxbar from "./components/ChatBoxbar";

export default function Home() {
  return (
    <div>
      <div className="flex items-center h-screen">
        <ChatSidebar />
        <ServerTopicbar />
        <ChatBoxbar />
      </div>
    </div>
  );
}
