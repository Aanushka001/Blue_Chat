import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  platform: "messenger" | "whatsapp" | "instagram";
  message: string;
  time: string;
}

interface MessageListProps {
  users: User[];
}

const MessageList: React.FC<MessageListProps> = ({ users }) => {
  return (
    <div className="flex-1">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">All</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-sm text-gray-600">232</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Oldest</span>
            <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5H7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="overflow-y-auto">
        {users.map((user) => (
          <div 
            key={user.id} 
            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 border-blue-600"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-2">
                <div className="relative">
                  <img 
                    src={user.avatar || "/assets/images/avatar.png"} 
                    alt={user.name} 
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{user.name}</span>
                    {user.platform === 'messenger' && (
                      <img 
                        src="/assets/images/messenger.png" 
                        alt="Messenger" 
                        className="w-4 h-4"
                      />
                    )}
                    {user.platform === 'whatsapp' && (
                      <img 
                        src="/assets/images/whatsapp.png" 
                        alt="WhatsApp" 
                        className="w-4 h-4"
                      />
                    )}
                    {user.platform === 'instagram' && (
                      <img 
                        src="/assets/images/instagram.png" 
                        alt="Instagram" 
                        className="w-4 h-4"
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate pr-4">
                    {user.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-gray-500">{user.time}</span>
                <FaCheck className="text-gray-400 w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
