// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "tommy-special-tutorial-cookie_id123",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
}
