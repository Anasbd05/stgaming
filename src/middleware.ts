// middleware.ts
import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export function middleware(req: NextRequest) {
    const token = req.cookies.get('sb-access-token')?.value

    if(token) {
        return NextResponse.redirect(new URL('/dashboard',req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/login','/'], // apply on login and home page
}
