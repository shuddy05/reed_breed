<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogPost;
use Illuminate\Support\Str;

class BlogPostController extends Controller
{
    // Public: List published posts
    public function index()
    {
        $posts = BlogPost::where('status', 'Published')->with('category')->latest()->get();
        return response()->json($posts);
    }

    // Public: Get single post
    public function show($slug)
    {
        $post = BlogPost::where('slug', $slug)->with(['category', 'comments' => function($q) {
            $q->where('status', 'Approved');
        }])->firstOrFail();
        
        return response()->json($post);
    }

    // Admin: List all posts
    public function adminIndex()
    {
        $posts = BlogPost::with('category')->latest()->get();
        return response()->json($posts);
    }

    // Admin: Create post
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'status' => 'required|in:Draft,Published',
            'image' => 'nullable|string'
        ]);

        $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();

        $post = BlogPost::create($validated);

        return response()->json($post, 201);
    }

    // Admin: Update post
    public function update(Request $request, $id)
    {
        $post = BlogPost::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'category_id' => 'sometimes|exists:categories,id',
            'status' => 'sometimes|in:Draft,Published',
            'image' => 'nullable|string'
        ]);

        $post->update($validated);

        return response()->json($post);
    }

    // Admin: Delete post
    public function destroy($id)
    {
        $post = BlogPost::findOrFail($id);
        $post->delete();
        return response()->json(null, 204);
    }
}
