import { NextRequest, NextResponse } from 'next/server';

interface TileParams {
  z: string;
  x: string;
  y: string;
}

/**
 * Cost-optimized tile serving for Vercel
 * Redirects to static files to minimize function invocations and compute costs
 */
export async function GET(
  request: NextRequest,
  { params }: { params: TileParams }
) {
  try {
    const z = parseInt(params.z);
    const x = parseInt(params.x);
    const y = parseInt(params.y);

    // Validate parameters
    if (isNaN(z) || isNaN(x) || isNaN(y)) {
      return new NextResponse('Invalid tile coordinates', { status: 400 });
    }

    // Get plane from query parameter, default to 0 (surface level)
    const url = new URL(request.url);
    const plane = parseInt(url.searchParams.get('plane') || '0');

    // Construct the static file path
    const staticTilePath = `/tiles/${plane}/${z}/${x}/${y}.png`;
    
    // On Vercel, redirect to static files (eliminates function compute cost)
    if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
      const baseUrl = process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}` 
        : request.url.split('/api')[0]; // Use current origin as fallback
        
      return NextResponse.redirect(new URL(staticTilePath, baseUrl), 301);
    }
    
    // Development fallback: return 404 for missing tiles
    // This prevents expensive placeholder generation in development
    return new NextResponse('Tile not available - generate tiles first', {
      status: 404,
      headers: {
        'Cache-Control': 'public, max-age=300', // Cache 404s for 5 minutes
        'Content-Type': 'text/plain',
      },
    });
    
  } catch (error) {
    console.error('Error handling tile request:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
