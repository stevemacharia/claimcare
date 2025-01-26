import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Paths that do not require authentication
  const publicPaths = [
    '/admin/login',
    '/staff/login',
    '/client/login',
    '/client/register',
  ];

  // Check if the request is for a public path
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Admin protected routes
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('admin-token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // Staff protected routes
  if (pathname.startsWith('/staff')) {
    const token = req.cookies.get('staff-token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/staff/login', req.url));
    }
  }

  // Client protected routes
  if (pathname.startsWith('/client')) {
    const token = req.cookies.get('client-token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/client/login', req.url));
    }
  }

  return NextResponse.next();
}
