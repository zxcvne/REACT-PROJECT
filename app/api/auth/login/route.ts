import db from "@/app/lib/db";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function POST(req: Request) {
  console.log("1");
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }
  console.log(email);
  try {
    console.log("2");
    const [rows] = await db.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    const users = rows as any[];
    console.log(users);
    if (users.length === 0) {
      return Response.json({ error: "User not found" }, { status: 401 });
    }
    const user = users[0];
    const isVaild = await bcrypt.compare(password, user.password);
    console.log(isVaild);
    if (!isVaild) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    return Response.json({ message: "로그인 성공" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Login failed" }, { status: 500 });
  }
}
