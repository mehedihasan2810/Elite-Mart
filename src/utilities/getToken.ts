import { cookies } from "next/headers"
export default function getToken():string {
    const cookieStore = cookies()
    const token = cookieStore.get('next-auth.session-token')

    return token ? token.value : '';
}
