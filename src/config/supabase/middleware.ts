import { createServerClient } from '@supabase/ssr';

import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/admin'];
const publicRoutes = ['/signin', '/signup', '/'];

export const updateSession = async (request: NextRequest) => {
  try {
    let supabaseResponse = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              request.cookies.set(name, value)
            );
            supabaseResponse = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();

    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    if (isProtectedRoute && !user) {
      return NextResponse.redirect(new URL('/signin', request.nextUrl));
    }

    if (isPublicRoute && user && !path.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/admin', request.nextUrl));
    }

    return supabaseResponse;
  } catch (err) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};