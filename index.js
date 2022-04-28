const helloFn = () => 'Hello';
const worldFn = () => 'Wworld';

function stitch() {
  let hello = helloFn();
  let world = worldFn();

  return `${hello} ${world}`
}

console.log(stitch());
