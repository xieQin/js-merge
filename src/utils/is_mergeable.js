const isMergeAble = (value) => {
    return isNonNull(value) && !isSpecial(value)
}

//判断非null
const isNonNull = (value) => {
    return !!value && typeof value == 'object'
}

const isSpecial = (value) => {
    let string = Object.prototype.toString.call(value)

    return string === '[object RegExp]'
            || string === '[object Date]'
            || isReactElement(value)
}

const isReactElement = (value) => {
    const canUseSymbol = typeof Symbol === 'function' && Symbol.for
    const REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7

    return value.$$typeof === REACT_ELEMENT_TYPE
}

export default isMergeAble
