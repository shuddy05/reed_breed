<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
    private function getKnowledgeBase()
    {
        $path = storage_path('app/chatbot_kb.md');
        if (file_exists($path)) {
            return file_get_contents($path);
        }
        
        // Fallback to a basic prompt if file is missing
        return "You are the Reed Breed AI Assistant. Help the user with their growth and automation needs.";
    }

    public function chat(Request $request)
    {
        $request->validate([
            'messages' => 'required|array',
        ]);

        $apiKey = env('MISTRAL_API_KEY');

        if (!$apiKey || $apiKey === 'your_mistral_api_key_here') {
            return response()->json([
                'reply' => "I'm currently in offline mode because my API key isn't configured. However, I can still tell you that Reed Breed specializes in AI Automation, Web Engineering, and Digital Marketing. Please contact hello@reedbreed.com for more details!"
            ]);
        }

        $messages = $request->input('messages');

        // Prepend knowledge base system prompt
        array_unshift($messages, [
            'role' => 'system',
            'content' => $this->getKnowledgeBase()
        ]);

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json',
            ])->post('https://api.mistral.ai/v1/chat/completions', [
                'model' => 'mistral-small-latest',
                'messages' => $messages,
                'temperature' => 0.7,
            ]);

            if ($response->failed()) {
                Log::error('Mistral API Error: ' . $response->body());
                return response()->json(['error' => 'Failed to generate response from Mistral API.'], 500);
            }

            $reply = $response->json('choices.0.message.content');

            return response()->json(['reply' => $reply]);

        } catch (\Exception $e) {
            Log::error('Mistral API Exception: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred during the chat request.'], 500);
        }
    }

    public function handoff(Request $request)
    {
        $request->validate([
            'messages' => 'required|array',
            'userInfo.name' => 'required|string',
            'userInfo.phone' => 'required|string',
        ]);

        $apiKey = env('MISTRAL_API_KEY');

        if (!$apiKey) {
            return response()->json(['error' => 'Mistral API key not configured on server.'], 500);
        }

        $messages = $request->input('messages');

        // Ask Mistral to summarize the conversation for the handoff
        $summaryMessages = $messages;
        $summaryMessages[] = [
            'role' => 'system',
            'content' => 'Summarize the above conversation in 2-3 short sentences. Focus strictly on what the user wants to achieve, buy, or ask the human director. Keep it extremely concise.'
        ];

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json',
            ])->post('https://api.mistral.ai/v1/chat/completions', [
                'model' => 'mistral-small-latest',
                'messages' => $summaryMessages,
            ]);

            if ($response->failed()) {
                Log::error('Mistral API Error (Handoff): ' . $response->body());
                return response()->json(['summary' => 'User requested a direct handoff from the AI assistant without a summary.'], 200);
            }

            $summary = $response->json('choices.0.message.content');

            return response()->json(['summary' => trim($summary)]);

        } catch (\Exception $e) {
            Log::error('Mistral API Exception (Handoff): ' . $e->getMessage());
            return response()->json(['summary' => 'User requested a direct handoff from the AI assistant without a summary.'], 200);
        }
    }
}
