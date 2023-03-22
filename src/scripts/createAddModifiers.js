const createAddModifiers = (item) => {
  return (modifiers) => {
    if (typeof modifiers !== "string") return ""
    return modifiers
      .split(" ")
      .map((modifier) => item + modifier)
      .join(" ")
  }
}

export default createAddModifiers
