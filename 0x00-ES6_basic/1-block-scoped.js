export default function taskBlock(trueOrFalse) {
  /* retained hoisting */
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
