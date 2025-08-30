export default function List() {
  const array = [1, 1, 1, 1, 1, 1, 1, 1];
  // let items = [];
  // for (let counter = 0; counter < array.length; counter++) {
  //   items.push(<li key={counter}>{counter}</li>);
  // }
  // return <ul>{items}</ul>;

  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>{index + 1}</li>
      ))}
    </ul>
  );
}
