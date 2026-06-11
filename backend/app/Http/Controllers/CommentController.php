<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\BlogPost;

class CommentController extends Controller
{
    // Public: Submit comment
    public function store(Request $request)
    {
        $validated = $request->validate([
            'post_id' => 'nullable|exists:blog_posts,id',
            'post_slug' => 'nullable|string|exists:blog_posts,slug',
            'author' => 'nullable|string|max:255',
            'name' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'text' => 'nullable|string|max:1000',
            'body' => 'nullable|string|max:1000',
        ]);

        if (!$request->post_id && !$request->post_slug) {
            return response()->json(['message' => 'Post ID or Slug is required'], 422);
        }

        $postId = $request->post_id;
        if (!$postId && $request->post_slug) {
            $post = BlogPost::where('slug', $request->post_slug)->firstOrFail();
            $postId = $post->id;
        }

        $comment = Comment::create([
            'post_id' => $postId,
            'author' => $request->name ?? $request->author ?? 'Anonymous',
            'email' => $request->email,
            'text' => $request->body ?? $request->text ?? '',
            'status' => 'Pending'
        ]);

        return response()->json(['message' => 'Comment submitted and awaiting approval', 'comment' => $comment], 201);
    }

    // Admin: List all comments
    public function index()
    {
        $comments = Comment::with('post:id,title')->latest()->get();
        return response()->json($comments);
    }

    // Admin: Update comment status (Approve/Spam)
    public function update(Request $request, $id)
    {
        $comment = Comment::findOrFail($id);

        $validated = $request->validate([
            'status' => 'required|in:Pending,Approved,Spam'
        ]);

        $comment->update($validated);

        return response()->json($comment);
    }

    // Admin: Delete comment
    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();
        return response()->json(null, 204);
    }
}
