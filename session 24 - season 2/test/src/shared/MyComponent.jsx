export function MyComponent(prop) {
  const { username } = prop;

  return (
    <main style={{ display: "flex", gap: "16px" }}>
      <section>Home</section>
      <section>Terms of service</section>
      <section>About us</section>

      {username ? <section>Logout</section> : null}
      {username && <section>Account</section>}
    </main>
  );
}
