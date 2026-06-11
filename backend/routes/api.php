<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LeadController;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ChatController;

// Public Routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/contact', [LeadController::class, 'store']);
Route::post('/appointments/book', [AppointmentController::class, 'book']);

// Chatbot Routes
Route::post('/chat', [ChatController::class, 'chat']);
Route::post('/chat/handoff', [ChatController::class, 'handoff']);

// Public Blog Routes
Route::get('/blog/categories', [CategoryController::class, 'index']);
Route::get('/blog/posts', [BlogPostController::class, 'index']);
Route::get('/blog/posts/{slug}', [BlogPostController::class, 'show']);
Route::post('/blog/comments', [CommentController::class, 'store']);

// Admin Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    // Leads Funnel
    Route::get('/leads', [LeadController::class, 'index']);
    Route::patch('/leads/{id}', [LeadController::class, 'update']);
    Route::delete('/leads/{id}', [LeadController::class, 'destroy']);

    // Blog CMS - Categories
    Route::post('/blog/categories', [CategoryController::class, 'store']);
    Route::patch('/blog/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/blog/categories/{id}', [CategoryController::class, 'destroy']);

    // Blog CMS - Posts
    Route::get('/admin/blog/posts', [BlogPostController::class, 'adminIndex']);
    Route::post('/admin/blog/posts', [BlogPostController::class, 'store']);
    Route::patch('/admin/blog/posts/{id}', [BlogPostController::class, 'update']);
    Route::delete('/admin/blog/posts/{id}', [BlogPostController::class, 'destroy']);

    // Blog CMS - Comments
    Route::get('/admin/blog/comments', [CommentController::class, 'index']);
    Route::patch('/admin/blog/comments/{id}', [CommentController::class, 'update']);
    Route::delete('/admin/blog/comments/{id}', [CommentController::class, 'destroy']);

    // Appointments
    Route::get('/appointments', [AppointmentController::class, 'index']);
    Route::post('/appointments/manual', [AppointmentController::class, 'store']);
    Route::patch('/appointments/{id}', [AppointmentController::class, 'update']);
    Route::delete('/appointments/{id}', [AppointmentController::class, 'destroy']);
});
