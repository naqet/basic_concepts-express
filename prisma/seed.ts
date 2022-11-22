import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test1@gmail.com",
      name: "Test name",
      passwordHash:
        "$2y$10$jJmhONK2gJfWSAj3U0KfyuYfq5hAJpzXrpUPq/IRZ0obxxBF7Nqq.",
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
