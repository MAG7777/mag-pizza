import { PrismaClient } from '@prisma/client';



const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;


// import {PrismaClient} from "@prisma/client";

// import Adapters from "next-auth/adapters";

// const prismaClientPropertyName = `__prevent-name-collision__prisma`;
// type GlobalThisWithPrismaClient = typeof globalThis & {
// 	[prismaClientPropertyName]: PrismaClient;
// };

// const getPrismaClient = () => {
// 	if (process.env.NODE_ENV === `production`) {
// 		return new PrismaClient();
// 	} else {
// 		const newGlobalThis = globalThis as GlobalThisWithPrismaClient;
// 		if (!newGlobalThis[prismaClientPropertyName]) {
// 			newGlobalThis[prismaClientPropertyName] = new PrismaClient();
// 		}
// 		return newGlobalThis[prismaClientPropertyName];
// 	}
// };
// const prisma= getPrismaClient();

// export default Adapters.Prisma.Adapter({prisma});
