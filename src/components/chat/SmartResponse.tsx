import React from 'react';

type SmartResponseProps = {
  onCancel: () => void;
  onSelect: () => void;
  firstName: string;
  storeName: string;
};

export const SmartResponse: React.FC<SmartResponseProps> = ({
  onCancel,
  onSelect,
  firstName,
  storeName,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 my-2">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
          AI
        </div>
        <span className="font-medium text-gray-900">Smart Response Detected!</span>
      </div>
      <p className="text-gray-700 mb-4">
        Hey, {firstName}. I saw you were curious about our products. My name is X from {storeName}, 
        feel free to save my number and send me a text if you have any questions or concerns.
      </p>
      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
        >
          Cancel
        </button>
        <button
          onClick={onSelect}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default SmartResponse;
