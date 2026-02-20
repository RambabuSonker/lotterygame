import { useState } from "react";

function LotteryGame() {
  const [ticket, setTicket] = useState(null);
  const [message, setMessage] = useState("");

  // Function to generate a 3-digit ticket
  const generateTicket = () => {
    // Generate 3 random digits (0–9)
    const digits = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];

    // Convert array to string (ticket format like 123, 560, 007)
    const ticketNumber = digits.join("");

    // Calculate sum of digits
    const sum = digits.reduce((acc, num) => acc + num, 0);

    // Update state
    setTicket(ticketNumber);

    if (sum === 15) {
      setMessage("🎉 Congratulations! You won the Lottery!");
    } else {
      setMessage("😢 Try Again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎲 Lottery Game</h1>
      <button onClick={generateTicket} style={{ padding: "10px 20px", fontSize: "18px" }}>
        Generate Ticket
      </button>

      {ticket && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Ticket: {ticket}</h2>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}

export default LotteryGame;
