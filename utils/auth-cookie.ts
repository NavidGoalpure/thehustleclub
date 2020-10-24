import { NextApiRequest, NextApiResponse } from "next";
import { serialize, parse } from "cookie";
import { IncomingMessage } from "http";

const TOKEN_NAME = "token";
const MAX_AGE = 60 * 60 * 24 * 14; // 14 days

export function setTokenCookie(res: NextApiResponse, token: string) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function removeTokenCookie(res: NextApiResponse) {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function parseCookies(req: IncomingMessage | NextApiRequest) {
  // For API Routes we don't need to parse the cookies.
  if ("cookies" in req) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || "");
}

export function getTokenCookie(
  req: IncomingMessage | NextApiRequest,
): string | undefined | null {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
}
