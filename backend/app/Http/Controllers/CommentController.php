<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    // Public: Submit comment
    public function store(Request $request)
    {
        $validated = $request->validate([
            'post_id' => 'required|exists:blog_posts,id',
            'author' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'text' => 'required|string|max:1000',
        ]);

        $validated['status'] = 'Pending';

        $comment = Comment::create($validated);

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
