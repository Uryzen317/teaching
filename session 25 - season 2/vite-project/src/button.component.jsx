export default function Button(props) {
  const { title, type, onClick } = props;

  if (type === ButtonType.Primary) return <PrimaryButton title={title} />;
  if (type === ButtonType.Secondary) return <SecondaryButton title={title} />;
  return <ErrorButton title={title} onClick={onClick} />;
}

// **- Types
export const ButtonType = {
  Primary: 0,
  Secondary: 1,
  Error: 2,
};

// **- Components
function PrimaryButton(props) {
  const { title } = props;

  return (
    <button
      className=""
      style={{
        outline: "none",
        border: "none",
        backgroundColor: "teal",
        color: "white",
        padding: "4px 32px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
}

function SecondaryButton(props) {
  const { title } = props;

  return (
    <button
      className=""
      style={{
        outline: "none",
        border: "none",
        backgroundColor: "gray",
        color: "white",
        padding: "4px 32px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
}

function ErrorButton(props) {
  const { title, onClick } = props;

  function handleClick(event) {
    event.stopPropagation();
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      className=""
      style={{
        outline: "none",
        border: "none",
        backgroundColor: "red",
        color: "white",
        padding: "4px 32px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
}
