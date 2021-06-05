export function setupHook<ARGS extends Array<any>, RETURN = void>() {
  const handlers: ((...args: ARGS) => RETURN)[] = []

  const addHandler = (fn: ((...args: ARGS) => RETURN)) => {
    handlers.push(fn)
  }

  const execute = (...args: ARGS) => handlers.forEach((fn) => {
    if (typeof fn === 'function') {
      fn(...args)
    }
  })

  return { execute, addHandler }
}

