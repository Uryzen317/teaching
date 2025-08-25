export default function HelloMehran({ user = {} }) {
  return (
    <>
      <p style={user.style}>{hail(user.username)}</p>
    </>
  );
}

function hail(username) {
  return "Hello " + username + "!";
}
