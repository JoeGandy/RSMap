import { NextRequest, NextResponse } from 'next/server';

interface TileParams {
  z: string;
  x: string;
  y: string;
}

/**
 * Redirect to static tile files or generate placeholder tiles
 * This avoids bundling large tile files into the serverless function
 */
async function handleTileRequest(plane: number, z: number, x: number, y: number): Promise<NextResponse> {
  // Construct the static file path
  const staticTilePath = `/tiles/${plane}/${z}/${x}/${y}.png`;
  
  // Try to redirect to static file first
  try {
    // Check if we're in production (Vercel) - redirect to static files
    if (process.env.VERCEL) {
      return NextResponse.redirect(new URL(staticTilePath, process.env.VERCEL_URL || 'http://localhost:3000'));
    }
    
    // In development, we can try to serve the file directly
    // But for Vercel deployment, we'll generate a placeholder
    return new NextResponse(generatePlaceholderTile(plane, z, x, y), {
      headers: {
        'Content-Type': 'image/bmp',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.log(`Tile not found: ${staticTilePath}, serving placeholder`);
    return new NextResponse(generatePlaceholderTile(plane, z, x, y), {
      headers: {
        'Content-Type': 'image/bmp',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
}

/**
 * Generate a black tile when pre-generated tiles are not available
 */
function generatePlaceholderTile(plane: number, z: number, x: number, y: number): Buffer {
  const width = 256;
  const height = 256;
  
  // Create BMP header
  const headerSize = 54;
  const imageSize = width * height * 3; // RGB (no alpha for BMP)
  const fileSize = headerSize + imageSize;
  
  const buffer = Buffer.alloc(fileSize);
  
  // BMP Header
  buffer.write('BM', 0); // Signature
  buffer.writeUInt32LE(fileSize, 2); // File size
  buffer.writeUInt32LE(0, 6); // Reserved
  buffer.writeUInt32LE(headerSize, 10); // Data offset
  
  // DIB Header
  buffer.writeUInt32LE(40, 14); // Header size
  buffer.writeInt32LE(width, 18); // Width
  buffer.writeInt32LE(-height, 22); // Height (negative for top-down)
  buffer.writeUInt16LE(1, 26); // Planes
  buffer.writeUInt16LE(24, 28); // Bits per pixel
  buffer.writeUInt32LE(0, 30); // Compression
  buffer.writeUInt32LE(imageSize, 34); // Image size
  buffer.writeInt32LE(2835, 38); // X pixels per meter
  buffer.writeInt32LE(2835, 42); // Y pixels per meter
  buffer.writeUInt32LE(0, 46); // Colors used
  buffer.writeUInt32LE(0, 50); // Important colors
  
  // Generate black image data
  let bufferIndex = headerSize;
  
  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      // All pixels are black (BMP uses BGR order)
      buffer[bufferIndex++] = 0; // B
      buffer[bufferIndex++] = 0; // G
      buffer[bufferIndex++] = 0; // R
    }
  }
  
  return buffer;
}

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

    // Direct coordinate mapping - Leaflet coordinates should now map directly to tile coordinates
    // No transformation needed since we're using direct mapping
    const tileY = y; // Direct mapping

    // Handle tile request (redirect to static files or generate placeholder)
    return await handleTileRequest(plane, z, x, tileY);
  } catch (error) {
    console.error('Error generating tile:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
