import {jwtVerify} from "jose";
import {NextResponse} from "next/server";

export async function GET(req, res) {
  const {searchParams} = new URL(req.url);
  let token = searchParams.get("token");
  try {
    let JWT_KEY = new TextEncoder().encode("ABCE-455-XDF");
    const decoded = await jwtVerify(token, JWT_KEY);
    return NextResponse.json({status: "sucess", decoded: decoded["payload"]});
  } catch (e) {
    return NextResponse.json({status: "fail"});
  }
}
