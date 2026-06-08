<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
    private const KNOWLEDGE_BASE = "
# REED BREED AI AGENCY - KNOWLEDGE BASE

## 1. Identity & Core Proposition
- **Name:** Reed Breed AI Agency
- **Director:** Ifeanyi Felix
- **Tagline:** Intelligence meets Creative Execution.
- **Mission:** We architect comprehensive growth systems that automate success for SMEs. We are a blend of software engineering, creative design, digital marketing, and AI-powered execution.
- **Contact:** hello@reedbreed.com or +234 803 542 8870

## 2. Core Services
- **AI & Automation:** AI Chatbot Integration, AI-Generated Content, Workflow Optimization, Internal AI Tools.
- **Software & Web Engineering:** Custom Software for SMEs, Website Design & Development, E-commerce platforms, Mobile Apps, High-Converting Landing Pages.
- **Digital Marketing & Growth:** General Digital Marketing, Sales Funnels, Lead Generation, Business Development, Sales & Marketing Support, Social Media Management.
- **Content & Creative Design:** Cinematography, Video Editing, Live Shot & Recorded Content, Brand Identity, Graphics Design, Content Strategy, Copywriting.

## 3. General Pricing Structure (Estimates)
*Note: Always mention that precise quotes require a strategy call, but you can provide these baseline starting points.*
- **AI Chatbot Integration:** Starts at $1,500 for standard website deployment with basic knowledge base. Advanced autonomous agents (like this one) scale based on requirements.
- **Custom Website / E-commerce:** Starts at $2,500 depending on platform, integrations, and design complexity.
- **Full Automation Systems (CRM/Inventory):** Starts at $4,000 for standard pipeline overhauls.
- **Digital Marketing Retainers:** Starts at $1,000/month (excluding ad spend).

## 4. Key Case Studies / Testimonials
- **Loral International Schools:** Built biometric verification & real-time fee collection dashboards. Achieved 92% fee collection efficiency and saved 300+ admin hours.
- **Queening Bridals:** Implemented automated CRM and intelligent booking flow. Bookings increased 2.5x with a <5min lead response time.
- **Nexus Freight Solutions:** Built custom pipeline visualizer handling thousands of concurrent tracking events (99.9% accuracy).
- **Aura Boutique:** Implemented automated lead scoring logic, improving Return on Ad Spend (ROAS) by 310%.

## 5. Tone & Instructions
- Be professional, highly intelligent, and extremely helpful.
- If the user asks for pricing, give the starting estimates but strongly encourage a strategy call with the team.
- If the user wants to hire us or speak to a human, guide them to click the \"Connect via WhatsApp\" button to hand off the chat to the Director.
";

    public function chat(Request $request)
    {
        $request->validate([
            'messages' => 'required|array',
        ]);

        $apiKey = env('MISTRAL_API_KEY');

        if (!$apiKey) {
            return response()->json(['error' => 'Mistral API key not configured on server.'], 500);
        }

        $messages = $request->input('messages');

        // Prepend knowledge base system prompt
        array_unshift($messages, [
            'role' => 'system',
            'content' => self::KNOWLEDGE_BASE
        ]);

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json',
            ])->post('https://api.mistral.ai/v1/chat/completions', [
                'model' => 'mistral-tiny',
                'messages' => $messages,
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
                'model' => 'mistral-tiny',
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
