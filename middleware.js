import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();
    // Signature Ndiaye Techn dans les Headers réels
    response.headers.set('X-Audit-Security', 'Propulsed-by-NdiayeTechn');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    return response;
}
