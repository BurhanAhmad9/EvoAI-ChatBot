import React, { useState } from "react";

const ruleBasedResponses = {
  "hello": "Hi there! How can I help you?",
  "how are you": "I'm just a chatbot, but I'm doing great!",
  "bye": "Goodbye! Have a great day!"
};

const EvoAIChatbot = () => {
  const [mode, setMode] = useState("rule-based");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getResponse = (message) => {
    if (mode === "rule-based") {
      return ruleBasedResponses[message.toLowerCase()] || "I'm not sure about that.";
    } else if (mode === "nlp") {
      return "This is a more natural AI-generated response!";
    } else if (mode === "transformer") {
      return "I understand context much better in this advanced mode!";
    }
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { user: "You", text: input }, { user: "EvoAI", text: getResponse(input) }];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-5 rounded-lg shadow-md w-96">
      <h1 className="text-xl font-bold mb-3">EvoAI Chatbot</h1>
      <select className="mb-3 p-2 border rounded" onChange={(e) => setMode(e.target.value)}>
        <option value="rule-based">Rule-Based</option>
        <option value="nlp">NLP-Based</option>
        <option value="transformer">Transformer AI</option>
      </select>
      <div className="border p-3 w-full h-64 overflow-y-auto bg-white rounded">
        {messages.map((msg, index) => (
          <p key={index} className={`${msg.user === "You" ? "text-blue-500" : "text-green-500"} mb-1`}>
            <strong>{msg.user}: </strong>{msg.text}
          </p>
        ))}
      </div>
      <div className="flex w-full mt-3">
        <input 
          type="text" 
          className="border p-2 flex-grow rounded-l" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white p-2 rounded-r" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default EvoAIChatbot;
