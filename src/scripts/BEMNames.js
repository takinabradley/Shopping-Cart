const isEmptyString = (item) => item === ""

function makeBuildElementsWithModifiersFromBlock(block) {
  const buildBlockElems = makeBuildElemsFromBlock(block)
  return (elems, modifiers) => {
    if (!elems || !modifiers) return
    const elemsList = buildBlockElems(elems)
    console.log(elemsList)
    const completeElems = elemsList
      .split(" ")
      .reduce((elemsWithModifiers, elem) => {
        modifiers.split(" ").forEach((modifier) => {
          elemsWithModifiers.push(buildModifier(elem, modifier))
        })

        return elemsWithModifiers
      }, [])
    return completeElems.join(" ")
  }
}

function makeBuildElementsAndModifiersFromBlock(block) {
  return (elems, modifiers) => {
    const buildBlockElems = makeBuildElemsFromBlock(block)
    const buildBlockModifiers = makeBuildModifiersFromItem(block)
    if (elems && modifiers) {
      const builtElems = buildBlockElems(elems)
      const builtModifiers = buildBlockModifiers(modifiers)
      return builtElems + " " + builtModifiers
    }

    if (elems) {
      return buildBlockElems(elems)
    }

    if (modifiers) {
      return buildBlockModifiers(modifiers)
    }
  }
}

// same as createAddModifiers
function makeBuildModifiersFromItem(item) {
  return (modifiers) => {
    if (typeof modifiers !== "string") return ""
    const modifierList = modifiers.split(" ")
    if (modifierList.every(isEmptyString)) return ""
    return modifierList
      .map((modifier) => buildModifier(item, modifier))
      .join(" ")
  }
}

function makeBuildElemsFromBlock(block) {
  return (elemNames) => {
    if (typeof elemNames !== "string") return ""
    const elemList = elemNames.split(" ")
    if (elemList.every(isEmptyString)) return ""
    return elemList.map((elem) => buildElem(block, elem)).join(" ")
  }
}

function makeBuildElementWithModifierFromBlock(block) {
  return (elem, modifier) => {
    if (elem && modifier) {
      return buildModifier(buildElem(block, elem), modifier)
    }

    if (elem) {
      return buildElem(block, elem)
    }

    if (modifier) {
      return buildModifier(block, modifier)
    }
  }
}

function makeBuildModifierFromItem(item) {
  return (modifier) => {
    return buildModifier(item, modifier)
  }
}

function makeBuildElemFromBlock(block) {
  return (elem) => {
    return buildElem(block, elem)
  }
}

function buildBEM(block, elem, modifier) {
  if (block && elem && modifier) {
    return buildModifier(buildElem(block, elem), modifier)
  }

  if (block && modifier) {
    return buildModifier(block, modifier)
  }

  if (block && elem) {
    return buildElem(block, elem)
  }

  if (elem && modifier) {
    return buildModifier(elem, modifier)
  }
}

const buildElem = (block, elem) => block + "__" + elem
const buildModifier = (item, modifier) => item + "--" + modifier

const BEMNames = {
  buildElem,
  buildModifier,
  buildBEM,
  makeBuildElemFromBlock,
  makeBuildModifierFromItem,
  makeBuildElementWithModifierFromBlock,
  makeBuildElemsFromBlock,
  makeBuildModifiersFromItem,
  makeBuildElementsAndModifiersFromBlock,
  makeBuildElementsWithModifiersFromBlock
}

export default BEMNames

export { makeBuildModifiersFromItem }
