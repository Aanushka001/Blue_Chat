import React, { useState } from 'react';
import { FaPhoneAlt, FaVideo, FaSearch, FaChevronLeft, FaCheck } from 'react-icons/fa';
import { MdAttachFile } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "I keep getting 'error while creating a new pop up' for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart",
      sender: 'user',
      timestamp: '12:52PM'
    },
    {
      id: 2,
      text: "Hey, I saw you were curious about our products. My name is X from StoreName, feel free to save my number and send me a text if you have any questions or concerns.",
      sender: 'system',
      timestamp: '12:53PM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showSmartResponse, setShowSmartResponse] = useState(true);

  const currentUser = {
    name: "Oğuz Yağız Kara",
    email: "oguz@bluereceipt.com",
    location: "11:59pm in Ankara, Turkey",
    revenue: "$3,452",
    orders: "3 Orders",
    webVisits: "42",
    linkClicks: "4 Link Clicks"
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    setMessages([...messages, {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setInputMessage('');
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-80 border-r border-gray-200">
        <div className="p-4 flex items-center gap-2">
          <FaChevronLeft className="text-gray-500" role="button" aria-label="Go Back" />
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white">B</span>
          </div>
          <span className="font-semibold">BlueChat</span>
          <div className="ml-auto flex gap-3">
            <FaSearch className="text-gray-500" role="button" aria-label="Search" />
            <button className="text-blue-600 text-xl" aria-label="Add Conversation">+</button>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <div className="flex">
            <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium" aria-label="View Messages">
              Messages
            </button>
            <button className="px-6 py-3 text-gray-600" aria-label="View Segments">Segments</button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">All</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-sm text-gray-600">232</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/api/placeholder/40/40"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-medium">{currentUser.name}</h2>
                  <div className="flex items-center gap-1">
                    <img 
                      src="/api/placeholder/20/20"
                      alt="Messenger"
                      className="w-5 h-5"
                    />
                    <FaCheck className="text-green-500 text-xs" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">{currentUser.email}</p>
              </div>
            </div>
            <BsThreeDots className="text-gray-400" role="button" aria-label="More Options" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 flex ${message.sender === 'system' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === 'system' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100'
              }`}>
                <p>{message.text}</p>
                <span className="text-xs text-gray-500 mt-1">{message.timestamp}</span>
              </div>
            </div>
          ))}
          
          {showSmartResponse && (
            <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg mb-4">
              <img 
                src="/api/placeholder/24/24"
                alt="Messenger"
                className="w-6 h-6"
              />
              <span>Smart Response Detected!</span>
              <button 
                onClick={() => setShowSmartResponse(false)}
                className="ml-2 px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
                aria-label="Cancel Smart Response"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowSmartResponse(false)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                aria-label="Select Smart Response"
              >
                Select
              </button>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <button className="text-gray-500" aria-label="Attach File">
              <MdAttachFile size={24} />
            </button>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border border-gray-200 rounded-full px-4 py-2"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
              aria-label="Send Message"
            >
              <IoMdSend size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 p-4 flex justify-between">
          <button className="flex items-center gap-2 text-gray-600" aria-label="Start a Call">
            <FaPhoneAlt /> Call
          </button>
          <button className="flex items-center gap-2 text-gray-600" aria-label="Start a Video Call">
            <FaVideo /> Video
          </button>
          <button className="text-gray-600" aria-label="More Options">
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div className="w-80 border-l border-gray-200">
        <div className="p-4">
          <div className="text-center mb-4">
            <img 
              src="/api/placeholder/80/80"
              alt="User avatar"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <h3 className="font-medium">{currentUser.name}</h3>
            <p className="text-sm text-gray-500">{currentUser.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm text-gray-500">Revenue</div>
              <div className="font-medium">{currentUser.revenue}</div>
              <div className="text-xs text-gray-500">{currentUser.orders}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Web Visits</div>
              <div className="font-medium">{currentUser.webVisits}</div>
              <div className="text-xs text-gray-500">{currentUser.linkClicks}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
