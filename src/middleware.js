import { NextResponse } from 'next/server'
 

export function middleware(request) {
  // return NextResponse.redirect(new URL('/admin', request.url))

  // if (role !== 'admin') {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
}
export const config = {
   matcher: '/admin/:path*',
}