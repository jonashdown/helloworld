const helloFn = () => 'hello';
const worldFn = () => 'world';

function stitch() {
  let hello = helloFn();
  let world = worldFn();

  return `${hello} ${world}`
}

console.log(stitch());
