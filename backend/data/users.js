import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Haikal",
    email: "haikal@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
  {
    name: "Along",
    email: "along@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

export default users;
