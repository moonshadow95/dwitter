let users = [
  {
    id: "1",
    username: "moonshadow95",
    password: "$2b$10$0yOayupORZ9YV9oqswFj1OB10D2NK8zhRvDUcPFsX7XjX0YTcyFqy", //1234
    name: "Chuljong",
    email: "sjs3080@naver.com",
    url: "https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg",
  },
  {
    id: "2",
    username: "sjs662080",
    password: "$2b$10$0yOayupORZ9YV9oqswFj1OB10D2NK8zhRvDUcPFsX7XjX0YTcyFqy", //1234
    name: "Jisoo",
    email: "sjs3080@naver.com",
    url: "https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function create(user) {
  const newUser = { ...user, id: Date.now().toString() };
  users.push(newUser);
  return newUser.id;
}
