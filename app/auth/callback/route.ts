import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  console.log(req.url, 'url');

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  console.log('got session');
  return NextResponse.redirect(new URL('/account', req.url))
}