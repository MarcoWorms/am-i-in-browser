
const isBrowser = () => {
  if (typeof module !== 'undefined' && module.exports) {
    return false
  }

  return true
}


module.exports = isBrowser
