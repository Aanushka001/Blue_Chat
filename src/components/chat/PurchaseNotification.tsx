
// src/components/chat/PurchaseNotification.tsx
const PurchaseNotification = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
      <span>🛍️</span>
      <div className="flex-1">
        <span className="text-blue-600">@Ekrem Kender</span>
        <span className="ml-2">Product purchased!</span>
      </div>
      <span className="bg-black text-white px-2 py-1 rounded text-sm">$99</span>
      <span className="text-gray-500">SNOW® TEETH WHITENING KIT</span>
    </div>
  )
}

export default PurchaseNotification
