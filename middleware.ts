// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { decode } from './utils/encrypt';

// export async function middleware(request: NextRequest) {
//   let cookie = request.cookies.get('lgstr');
//   let getValueCookie = decode(cookie?.value ?? '') ?? {};
//   let path = request.nextUrl.pathname;

//   const role = getValueCookie?.user?.role?.name.toLowerCase();

//   const publicPath = [
//     '/',
//     '/confirm-emaik',
//     '/forget-password',
//     '/google',
//     '/password-change',
//     '/sign-up',
//     'verify',
//   ];

//   if (role == null && !publicPath.includes(path)) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   if (
//     role === 'admin' &&
//     path != '/admin' &&
//     (path.includes('/user') || path.includes('/reseller'))
//   )
//     return NextResponse.redirect(new URL('/admin/home', request.url));

//   if (
//     role === 'user' &&
//     path != '/user' &&
//     (path.includes('/admin') || path.includes('/reseller'))
//   )
//     return NextResponse.redirect(new URL('/user/home', request.url));

//   if (
//     role === 'reseller' &&
//     path != '/reseller' &&
//     (path.includes('/user') || path.includes('/admin'))
//   )
//     return NextResponse.redirect(new URL('/reseller/home', request.url));

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/',
//     '/auth/:path*',
//     '/home',
//     '/user/:path*',
//     '/admin/:path*',
//     '/reseller/:path',
//   ],
// };
