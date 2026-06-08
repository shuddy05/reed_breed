import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import os from "os";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { compositionId, resolution } = body;

    // The entry point for Remotion
    const entry = path.resolve(process.cwd(), "components/remotion/index.ts");

    console.log("Creating Remotion bundle...");
    // Create the webpack bundle
    const bundled = await bundle({
      entryPoint: entry,
      // If you have Webpack overrides, they would go here
    });

    console.log("Selecting composition...");
    // Extract the composition metadata
    const composition = await selectComposition({
      serveUrl: bundled,
      id: compositionId || "ClassroomPRO",
    });

    const outputLocation = path.join(os.tmpdir(), `render-${Date.now()}.mp4`);

    console.log("Starting render...");
    // Render the video
    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: "h264",
      outputLocation,
      videoBitrate: "10M",
      onProgress: ({ progress }) => {
        console.log(`Rendering progress: ${Math.round(progress * 100)}%`);
      },
    });

    console.log("Render complete!");

    // Read the rendered file
    const fileBuffer = fs.readFileSync(outputLocation);

    // Clean up temp file
    fs.unlinkSync(outputLocation);

    // Return the MP4 binary stream
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": `attachment; filename="ReedBreed_${compositionId}_${resolution.label}.mp4"`,
      },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred during rendering';
    console.error("Render failed:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
