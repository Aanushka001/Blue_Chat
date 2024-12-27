import { FC, ChangeEvent } from 'react';
import { IoMdSend } from "react-icons/io";


interface ChatInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  placeholder: string;
}

const ChatInput: FC<ChatInputProps> = ({ value, onChange, onSend, placeholder }) => (
  <div className="border-t border-gray-200 p-4">
    <div className="flex items-center gap-2">
      <button title="Attach File" className="p-2 hover:bg-gray-100 rounded-full">
        {/* Replace the icon with the local image */}
        <img src= '/assets/images/messenger-icon.png' alt="Messenger Icon" className="w-6 h-6" />
      </button>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
      />
      <button title="Send Message" onClick={onSend} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        <IoMdSend />
      </button>
    </div>
  </div>
);

export default ChatInput;
