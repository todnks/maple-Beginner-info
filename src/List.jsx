export default function List(data, addClassToggle) {
  const Listtoggle = (e) => {
    const target = e.target;
    addClassToggle(target);
  };
  return <li onClick={Listtoggle}>{name}</li>;
}
