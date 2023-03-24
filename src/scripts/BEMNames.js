const isEmptyString = (item) => item === ""

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

/* usage: 
  
  //create new BEM object with BEM.b as the block
  const BEM = createBem('your-block')
  BEM.b // 'your-block'

  //create BEM string from element name
  BEM.e('your-elem) // 'your-block__your-elem'

  //create BEM element modifier
  BEM.e('your-elem', 'sharp') //'your-block__your-elem--sharp'

  // create BEM block modifier
  BEM.e(null, 'pointy') //'your-block--pointy'

  // better BEM block modifier alternative
  BEM.bm('super sucky')

  // better way to modify elements:
  const modifierFunc = BEM.m(<block or elem to modify>)
  modifierFunc('modifier1 modifier2')

  Ex:
  const modifyNavItem = BEM.m('block-name__nav-item')//or BEM.m(BEM.e('nav-item'))
  modifyNavItem('mod1 mod2') // 'block-name__nav-item--mod2 block-name__nav-item--mod2'
*/
function createBEM(b) {
  return {
    // block
    b,

    // element
    e(elem, modifier) {
      if (elem && modifier) {
        return buildBEM(this.b, elem, modifier)
      }

      if (elem) {
        return buildElem(this.b, elem)
      }

      if (modifier) {
        return buildModifier(this.b, modifier)
      }
    },

    // modifier
    m(item) {
      return makeBuildModifiersFromItem(item)
    },

    // (block modifier)
    // FixMe?:
    // It may be useful to allow this to take an array, as well as a string.
    // the change could be made for the modifier build function too
    bm(modifiers) {
      const blockModifier = makeBuildModifiersFromItem(this.b)
      return blockModifier(modifiers)
    }
  }
}

export default createBEM

export { buildElem, buildModifier, buildBEM, makeBuildModifiersFromItem }
