import React from "react";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div
      className="fixed top-4 left-4 p-4 bg-green-500 text-white rounded shadow-lg"
      style={{ zIndex: 1000 }}
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
