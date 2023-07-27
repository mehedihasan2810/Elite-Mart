import { headers } from "next/headers";

export default function isAuthenticated(): string | null {
  const headerInstance = headers();
  const authorization = headerInstance.get("authorization");

  return authorization;
}
