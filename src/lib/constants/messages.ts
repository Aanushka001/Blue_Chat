export const SMART_RESPONSES = {
    GREETING: "Hey {{firstname}}! I saw you were curious about our products. My name is X from StoreName, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to",
    FOLLOW_UP: "Hi {{firstname}}! Just checking in to see if you had any questions about your recent order. How are you finding the product so far?",
    ABANDONED_CART: "Hey {{firstname}}! I noticed you left some items in your cart. Is there anything I can help you with?",
  };
  
  export const MESSAGE_TYPES = {
    TEXT: 'text',
    SMART_RESPONSE: 'smart_response',
    PURCHASE: 'purchase',
    SYSTEM: 'system',
  } as const;