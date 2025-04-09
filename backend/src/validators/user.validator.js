const z = require('zod');

const createUserSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
  });
  
module.exports = {
    createUserSchema,
};