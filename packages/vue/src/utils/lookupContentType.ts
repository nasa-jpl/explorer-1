import { contentAliases } from './../constants'

export const getInterfaceFromEskey = (eskey: string) => {
  let match = undefined
  contentAliases.forEach((alias) => (alias.eskey === eskey ? (match = alias.interface) : undefined))
  return match
}

export const getEskeyFromInterface = (interfaceName: string) => {
  let match = undefined
  contentAliases.forEach((alias) =>
    alias.interface === interfaceName ? (match = alias.eskey) : undefined
  )
  return match
}

export const lookupContentType = (key: string, source: string, target: string) => {
  let match = undefined
  // @ts-expect-error
  contentAliases.forEach((entry) => (entry[source] === key ? (match = entry[target]) : undefined))
  return match
}
