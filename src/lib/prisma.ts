import { PrismaClient } from "@prisma/client/extension";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
    adpter: new PrismaPg({ 
        connectionString: process.env.DATABASE_URL
    })
})

export default prisma;