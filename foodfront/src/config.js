import { createChatBotMessage } from "react-chatbot-kit";
  
  const config = {
    botName: "Baguetteboi 🤠",
    initialMessages: [createChatBotMessage(`Hi, Welcome to FoodDrop!`)],
    customStyles: {
        botMessageBox: {
          backgroundColor: "#e9c46a",
        },
        chatButton: {
          backgroundColor: "#e9c46a",
        },
      },
  }
  
  export default config