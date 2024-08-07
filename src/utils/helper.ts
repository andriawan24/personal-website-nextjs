export function capitalize(text: String): String {
  return text.split('-').map((text) => {
    const firstChar = text.charAt(0).toUpperCase()
    return firstChar + text.slice(1, text.length)
  }).join(' ')
}