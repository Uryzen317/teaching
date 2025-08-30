export default function Button(props) {
  console.log("Full props : ", props);
  const { title, globalAlertWapper, icon, children, theme, isSpecial, index } = props;

  return (
    <>
      <button style={{ backgroundColor: theme === "red" ? "red" : theme === "green" ? "green" : "blue" }}>
        {/* Logical And */}
        {index && index + "-"}
        {/* Ternary */}
        {children ? children : null} {title}
        {/* Expanded Ternary */}
        {isSpecial ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M852-212 732-332l56-56 120 120-56 56ZM708-692l-56-56 120-120 56 56-120 120Zm-456 0L132-812l56-56 120 120-56 56ZM108-212l-56-56 120-120 56 56-120 120Zm246-75 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-361Z" />
          </svg>
        ) : (
          <></>
        )}
      </button>
    </>
  );

  // Conditional rendering
  // // red, green, blue
  // if (theme === "red")
  //   return (
  //     <>
  //       <button style={{ backgroundColor: "red" }}>
  //         {children} {title}
  //       </button>
  //     </>
  //   );

  // if (theme === "blue")
  //   return (
  //     <>
  //       <button style={{ backgroundColor: "blue" }}>
  //         {children} {title}
  //       </button>
  //     </>
  //   );

  // if (theme === "green")
  //   return (
  //     <>
  //       <button style={{ backgroundColor: "green" }}>
  //         {children} {title}
  //       </button>
  //     </>
  //   );
}
