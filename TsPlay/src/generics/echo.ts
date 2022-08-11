// Generic Constraints
function echo<T extends number | string>(value: T): T {
  return value;
}
echo(1);
// echo(true);
