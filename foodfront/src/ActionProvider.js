class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
      }
      
      greet() {
        const greetingMessage = this.createChatBotMessage("Hi, foodie 🤡 ")
        this.updateChatbotState(greetingMessage)
      }
      feeling() {
        const greetingMessage = this.createChatBotMessage("Great to be alive! 🤖 ")
        this.updateChatbotState(greetingMessage)
      }
      hungry() {
        const greetingMessage = this.createChatBotMessage("No thanks, I just had a byte")
        this.updateChatbotState(greetingMessage)
      }
      Raza() {
        const greetingMessage = this.createChatBotMessage("Great, friendly, and knowledgeable, but who leaves for a week??")
        this.updateChatbotState(greetingMessage)
      }
      
      updateChatbotState(message) {
     
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
     
        
       this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
      }
    }
  
  export default ActionProvider;
  