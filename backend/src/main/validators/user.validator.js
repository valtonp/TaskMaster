const z = require('zod');

const createUserSchema = z.object({
  name: z.string({ required_error: 'Le nom est requis' }).min(1, 'Le nom ne peut pas être vide'),
  email: z.string({ required_error: 'L\'email est requis' }).email('Email invalide'),
  password: z.string({ required_error: 'Le mot de passe est requis' }).min(6, 'Le mot de passe doit faire au moins 6 caractères'),
});

module.exports = {
  createUserSchema,
};
