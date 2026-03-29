export default function OutputBox({ data }) {
  return (
    <div>
      <h3>Output</h3>
      <p>{data?.output}</p>
    </div>
  );
}