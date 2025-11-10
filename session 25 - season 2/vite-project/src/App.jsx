import Button, { ButtonType } from "./button.component";

export default function App() {
  function handleClick(event) {
    console.log("clicked");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }

  return (
    <div onClick={() => console.log("root clicked")}>
      Hello world
      <Button title="Click me" type={ButtonType.Primary} />
      <Button title="Click me" type={ButtonType.Secondary} />
      <Button title="Click me" type={ButtonType.Error} onClick={handleClick} />
      <button onClick={handleClick}>Click me</button>
      <form onSubmit={handleSubmit}>
        <input />
        <button>submit</button>
      </form>
    </div>
  );
}
