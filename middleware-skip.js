import { NextResponse } from 'next/server';

const publicPaths = ['/login', '/register'];

export const middleware = (request) => {
    const { path } = request.nextUrl;
    const isPublicPath = publicPaths.includes(path);
    const token = request.cookies.get('token')?.value || '';

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/profile', '/mock-tests/premium-tests', '/login', '/register'],
};
