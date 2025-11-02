import { MyComponent } from "./shared/MyComponent";
import Name, { CONF_AGE, CONF_NAME } from "./shared/name.component";

function App() {
  const users = [
    {
      id: 0,
      username: "mohammad",
      badge: "User",
    },
    {
      id: 1,
      username: "mehran",
      badge: "Admins",
    },
  ];

  return (
    <>
      <MyComponent username={true} />

      {users.map((user, index) => (
        <Name key={user.id} username={user.username}>
          <strong>{user.badge}</strong>
        </Name>
      ))}
    </>
  );
}

export default App;
