// Asynchronous function to reverse the order of words in a string
export async function reverseWords(str: string) {
  const words = str.split(" ");
  return words.reverse().join(" ");
}
