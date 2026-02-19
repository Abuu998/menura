import { z } from "zod";

export const createMealSchema = z.object({
  main: z.uuidv4(),
  secondary: z.uuidv4(),
  tertiary: z.uuidv4(),
  sauce: z.uuidv4(),
});

export type CreateMealInput = z.infer<typeof createMealSchema>;
