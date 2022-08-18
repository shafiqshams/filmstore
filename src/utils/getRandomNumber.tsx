export function getRandomNumber(min: number = 1, max: number = 200) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
