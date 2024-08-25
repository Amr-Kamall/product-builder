export function txtSlice(text: string, max: number = 50) {
  if (text?.length > max) return `${text.slice(0, 70)}...`;
  return text;
}
