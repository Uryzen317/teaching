export default function Name(prop) {
  const { username, id, children } = prop;

  return (
    <p>
      hi, {username} {children}
    </p>
  );
}

export const CONF_NAME = "testtest";
export let CONF_AGE = 24;
export const CONF_INIT = () => {};
export const CONF_OBJ = {};
