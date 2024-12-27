
// src/components/chat/PlatformSelector.tsx
const PlatformSelector = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="p-2 hover:bg-gray-50 rounded-lg">
        <img 
          src="/assets/images/messenger.png" 
          alt="Messenger"
          className="w-6 h-6"
        />
      </button>
      <button className="p-2 hover:bg-gray-50 rounded-lg">
        <img 
          src="/assets/images/facebook.png" 
          alt="Facebook"
          className="w-6 h-6"
        />
      </button>
    </div>
  )
}

export default PlatformSelector
