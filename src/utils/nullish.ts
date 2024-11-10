export const getValueIfNotNullish = <T, P = T>(
  value: T | undefined | null,
  auxValue: P
): T | P => {
  if (value === undefined || value === null) return auxValue
  return value
}

export const getValueIfTruthy = <T, P = T>(
  value: T | undefined | null,
  auxValue: T
): T | P => {
  if (value === undefined || value === null) return auxValue
  if (value as boolean) return value
  return auxValue
}
