import { users } from "../../../data";

export function SlowComponent() {
  const userList = users.map((user, i) => <SlowProduct key={i} user={user} />);
  return (
    <>
      <h1>Products page</h1>
      <ul>{userList}</ul>
    </>
  );
}

function SlowProduct({ user }: { user: { name: string } }) {
  sleep(3);
  return <li>Product {user.name}</li>;
}
function sleep(seconds: number) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < seconds) {}
}
