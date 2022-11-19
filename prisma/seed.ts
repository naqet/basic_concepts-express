import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@gmail.com",
      name: "Test name",
    },
  });

  const post = await prisma.post.create({
    data: { content: "Test post content", authorId: user.id },
  });

  await prisma.comment.create({
    data: { content: "Test comment", postId: post.id, authorId: user.id },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
