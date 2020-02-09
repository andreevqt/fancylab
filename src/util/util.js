export const latest = (arr, limit) => {
  return [...arr].reverse().slice(0, limit);
}