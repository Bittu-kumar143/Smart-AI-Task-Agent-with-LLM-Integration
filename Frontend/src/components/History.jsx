export default function History({ items }) {
  return (
    <div>
      <h3>History</h3>
      {items.map((item, i) => (
        <div key={i}>
          <p><b>Input:</b> {item.input}</p>
          <br />
          <p><b>Output:</b> {item.output}</p>
        </div>
      ))}
    </div>
  );
}