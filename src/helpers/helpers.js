export function object2Sql (data) {
  const query = Object.keys(data).map((element) => `${element} = ?`).join(', ')
  const values = Object.values(data)
  return { query, values }
}
