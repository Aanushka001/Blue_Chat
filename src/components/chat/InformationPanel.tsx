import React from 'react';
import { MdEmail, MdPhone, MdAccessTime, MdSegment } from 'react-icons/md';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string; 
  location?: string;
  isOnline: boolean;
  revenue?: string;
  webVisits?: string;
  orders?: string;
  tags?: string[];
  phone?: string;
  linkClicks?: string;
  lastVisited?: string;
}

interface InformationPanelProps {
  user: User;
}

const InformationPanel: React.FC<InformationPanelProps> = ({ user }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 flex items-center gap-4">
        <div className="relative w-16 h-16">
          <img
            src={user.avatar || '/assets/images/avatar.png'} 
            alt="User Avatar"
            className="w-full h-full rounded-full object-cover"
          />
          {user.isOnline && (
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div>
          <p className="font-semibold text-lg">{user.name}</p>
          <p className="text-sm text-gray-500">{user.location || 'Location not available'}</p>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4 border-t border-gray-200">
        <div>
          <p className="text-xs text-gray-500">Revenue</p>
          <p className="font-semibold text-lg">{user.revenue ?? 'N/A'}</p>
          <p className="text-xs text-gray-500">Orders: {user.orders ?? 'N/A'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Web Visits</p>
          <p className="font-semibold text-lg">{user.webVisits ?? 'N/A'}</p>
          <p className="text-xs text-gray-500">Clicks: {user.linkClicks ?? 'N/A'}</p>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Search in general..."
          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
        />
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">Information</h3>
          <button className="text-blue-600 text-xs font-medium">Add</button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <MdSegment className="text-gray-400 w-4 h-4" />
            <div>
              <p className="text-xs text-gray-500">Segment</p>
              <p className="font-medium text-sm">Abandoned Cart</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail className="text-gray-400 w-4 h-4" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="font-medium text-sm">{user.email}</p>
            </div>
          </div>

          {user.phone && (
            <div className="flex items-center gap-3">
              <MdPhone className="text-gray-400 w-4 h-4" />
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="font-medium text-sm">{user.phone}</p>
              </div>
            </div>
          )}

          {user.lastVisited && (
            <div className="flex items-center gap-3">
              <MdAccessTime className="text-gray-400 w-4 h-4" />
              <div>
                <p className="text-xs text-gray-500">Last Visited</p>
                <p className="font-medium text-sm">{user.lastVisited}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">Tags</h3>
          <button className="text-blue-600 text-xs font-medium">Add</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {user.tags && user.tags.length > 0 ? (
            user.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-gray-100 rounded-full text-xs flex items-center gap-2"
              >
                {tag}
                <button className="text-gray-400 hover:text-gray-600">×</button>
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-500">No tags available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
