import {SignJWT} from "jose";
import {NextResponse} from "next/server";

export async function GET(req, res) {
  const {searchParams} = new URL(req.url);
  let email = searchParams.get("email");
  console.log(email);

  try {
    let payload = {
      email: email,
      user_id: 123,
    };
    let JWT_KEY = new TextEncoder().encode("ABCE-455-XDF");
    let algorithm = {alg: "HS256"};
    let issuer = "www.ostad.app";
    let expiresIn = "1h";

    let token = await new SignJWT(payload)
      .setProtectedHeader(algorithm)
      .setIssuedAt()
      .setIssuer(issuer)
      .setExpirationTime(expiresIn)
      .sign(JWT_KEY);
    return NextResponse.json({status: "Sucess", token: token});
  } catch (e) {
    console.log(e);

    return NextResponse.json("fail");
  }
}
