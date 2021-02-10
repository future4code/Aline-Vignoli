import bcrypt from "bcryptjs";

export class HashGenerator {
   public hash = (s: string): string => {
      const rounds: number = Number(process.env.BCRYPT_COST)
      const salt =  bcrypt.genSaltSync(rounds)
      const result =  bcrypt.hashSync(s, salt)
      return result
   }

   public compareHash = (s: string, hash: string): boolean => {
      return bcrypt.compareSync(s, hash)
   }
}
