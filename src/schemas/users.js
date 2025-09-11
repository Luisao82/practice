import z from 'zod'

export const userSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string'
  }).min(3).max(30),
  email: z.string().email(),
  phone: z.string().min(9).max(15)
})

export function validateUser (object) {
  return userSchema.safeParse(object)
}

export function validateParcialUser (object) {
  return userSchema.partial().safeParse(object)
}
