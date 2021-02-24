class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
      }
    
      parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        
        if (lowerCaseMessage.includes("hello")) {
          this.actionProvider.greet()
        }

        if (lowerCaseMessage.includes("how are you?")) {
          this.actionProvider.feeling()
        }

        if (lowerCaseMessage.includes("are you hungry?")) {
          this.actionProvider.hungry()
        }
        if (lowerCaseMessage.includes("what do you think about the instructors?")) {
          this.actionProvider.Raza()
        }
      }
    }
    
  
  export default MessageParser;