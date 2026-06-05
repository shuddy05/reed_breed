import { NextResponse } from 'next/server';
import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || '';
const client = new Mistral({ apiKey: apiKey });

export async function POST(req: Request) {
  try {
    const { messages, userInfo } = await req.json();

    if (!messages || !userInfo?.name || !userInfo?.phone) {
      return NextResponse.json(
        { error: 'Missing required chat history or user information.' },
        { status: 400 }
      );
    }

    if (!apiKey) {
      throw new Error('Mistral API Key is missing.');
    }

    // 1. Summarize the conversation using Mistral
    const summaryPrompt = [
      {
        role: 'system',
        content: 'You are an expert summarizer. Given the following chat history between a website visitor and an AI assistant, provide a concise 2-3 sentence summary of what the user wants, their intent, and any specific services they asked about. Do not include greetings. Speak in the third person (e.g., "The user is looking for...").'
      },
      ...messages.map((m: { role: string; content: string }) => ({ role: m.role, content: m.content }))
    ];

    const summaryResponse = await client.chat.complete({
      model: 'mistral-tiny',
      messages: summaryPrompt as any,
    });

    const summary = summaryResponse.choices?.[0]?.message?.content;

    // Return the summary to the frontend so it can construct the wa.me link
    return NextResponse.json({ success: true, summary: summary });

  } catch (error: unknown) {
    console.error('Handoff Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred during handoff.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
