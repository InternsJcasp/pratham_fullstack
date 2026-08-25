export function Child({ sendMessage }) {
  return <button onClick={() => sendMessage("Hello Parent")}>Send</button>;
}
