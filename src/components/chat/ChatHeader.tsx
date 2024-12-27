
// ChatHeader.tsx
import React from 'react';
import { FaPhoneAlt, FaVideo, FaCheck } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  platform: "messenger" | "whatsapp" | "instagram";
}

interface ChatHeaderProps {
  user: User;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
  return (
    <div className="border-b border-gray-200">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={user.avatar || "/assets/images/avatar.png"} 
              alt="" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-medium">{user.name}</h2>
                <div className="flex items-center gap-1">
                  <img 
                    src="/api/placeholder/16/16" 
                    alt="Messenger" 
                    className="w-4 h-4"
                  />
                  <FaCheck className="text-green-500 text-xs" />
                </div>
              </div>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <BsThreeDots className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;