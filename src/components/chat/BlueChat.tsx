"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { MdAttachFile } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import ChatHeader from '../chat/ChatHeader';
import SmartResponse from '../chat/SmartResponse';
import MessageList from '../chat/MessageList';
import InformationPanel from '../chat/InformationPanel';
import { User, Message } from '../chat/types';

const BlueChat = () => {
  const currentUser: User = {
    id: "1",
    name: "Oğuz Yağız Kara",
    email: "oguzyagizkar@gmail.com",
    phone: "+90 535 644 81 77",
    avatar: "/assets/images/avatar.png",
    location: "Ankara, Turkey",
    isOnline: true,
    revenue: "$3,452",
    webVisits: "42",
    orders: "3 Orders",
    tags: ["Abandoned Cart User", "Popup", "Shop Error", "Successful"],
    platform: "messenger",
    message: "I keep getting \"error while creating a new pop up\" for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart",
    time: "12:52PM",
    isRead: false,
  };

  const otherUsers: User[] = [
    {
      id: "2",
      name: "George Klein",
      email: "george.klein@example.com",
      phone: "+1 234 567 890",
      avatar: "/assets/images/avatar2.png",
      location: "New York, USA",
      isOnline: true,
      revenue: "$1,200",
      webVisits: "30",
      orders: "2 Orders",
      tags: ["New User", "Interested"],
      platform: "whatsapp",
      message: "Wow, this is really epic man! Thanks!",
      time: "1:54PM",
      isRead: true,
    },
    {
      id: "3",
      name: "847-401-1944",
      email: "",
      phone: "+1 847 401 1944",
      avatar: "/assets/images/avatar3.png",
      location: "Chicago, USA",
      isOnline: false,
      revenue: "$0",
      webVisits: "0",
      orders: "0 Orders",
      tags: ["Anonymous"],
      platform: "instagram",
      message: "Haha oh man, this is amazing!",
      time: "6:21PM",
      isRead: true,
    },
    {
      id: "4",
      name: "Erşad Başbağ",
      email: "ersad.basbag@example.com",
      phone: "+90 555 123 4567",
      avatar: "/assets/images/avatar4.png",
      location: "Istanbul, Turkey",
      isOnline: true,
      revenue: "$2,800",
      webVisits: "60",
      orders: "4 Orders",
      tags: ["Returning User", "Loyal"],
      platform: "messenger",
      message: "There will be changes to next week’s presentation due to the recent policy update.",
      time: "6:21PM",
      isRead: true,
    },
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Oğuz Yağız Kara",
      content: currentUser.message || '',
      type: "user",
      timestamp: currentUser.time || '',
      avatar: currentUser.avatar,
    },
  ]);

  const handleSendMessage = (messageContent: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: currentUser.name,
      content: messageContent,
      type: "user",
      timestamp: new Date().toLocaleTimeString(),
      avatar: currentUser.avatar,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <div className="w-80 border-r border-gray-200 bg-gray-50">
        <div className="p-4 border-b border-gray-300 bg-blue-600 text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm">BC</span>
            </div>
            <h1 className="text-xl font-semibold">BlueChat</h1>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium">Messages</button>
            <button className="px-4 py-2 text-white bg-transparent rounded-full text-sm border border-white">Segments</button>
          </div>
        </div>
        <MessageList users={[currentUser, ...otherUsers]} />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-3">
            <img src={currentUser.avatar} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <h2 className="font-semibold">{currentUser.name}</h2>
              <p className="text-sm text-gray-500">{currentUser.email}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Phone Call">
              <FaPhoneAlt className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Video Call">
              <FaVideo className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" title="More Options">
              <BsThreeDots className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          {messages.map((message) => (
            <div key={message.id} className="mb-4">
              <div className="flex items-center gap-2">
                <img src={message.avatar} alt="" className="w-8 h-8 rounded-full" />
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-gray-800">{message.content}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 ml-10">{message.timestamp}</span>
            </div>
          ))}
          <SmartResponse
            onCancel={() => console.log("Cancel")}
            onSelect={() => console.log("Select")}
            firstName="Oğuz"
            storeName="PinkSweetHeart"
          />
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Message Oğuz Yağız..."
              className="flex-1 rounded-full border border-gray-300 px-4 py-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = "";
                }
              }}
            />
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Attach File">
              <MdAttachFile className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Send Message">
              <IoMdSend className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-80 border-l border-gray-200">
        <InformationPanel user={currentUser} />
      </div>
    </div>
  );
};

export default BlueChat;
