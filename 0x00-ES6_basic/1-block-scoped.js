export default function taskBlock(trueOrFalse) {
  /* retained hoisting */
  const task = false;
  const task2 = true;

  /* eslint-disable */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
