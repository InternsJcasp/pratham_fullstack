| Controlled                     | Uncontrolled                   |
| ------------------------------ | ------------------------------ |
| React controls the input       | DOM controls the input         |
| Uses `useState`                | Usually uses `useRef`          |
| Uses `value`                   | Usually uses `ref`             |
| `onChange` updates state       | DOM automatically stores value |
| React knows value continuously | React reads value when needed  |
| Better for validation          | Good for simple forms          |
| Better for dynamic UI          | Less React code                |
| More code                      | Simpler code                   |
