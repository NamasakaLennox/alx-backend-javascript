export default function guardrail(mathFunction) {
  const output = [];
  try {
    const val = mathFunction();
    output.push(val);
  } catch ({ name, message }) {
    output.push(`${name}: ${message}`);
  } finally {
    output.push('Guardrail was processed');
  }
  return output;
}
