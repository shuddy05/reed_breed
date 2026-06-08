<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    // Frontend: Submit new booking
    public function book(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date_format:Y-m-d',
            'time' => 'required|string|max:50',
            'type' => 'required|string|max:255',
            'notes' => 'nullable|string',
        ]);

        $validated['status'] = 'Upcoming';

        $appointment = Appointment::create($validated);

        return response()->json(['message' => 'Appointment booked successfully', 'appointment' => $appointment], 201);
    }

    // Admin: List all appointments
    public function index()
    {
        $appointments = Appointment::orderBy('date', 'desc')->orderBy('time', 'asc')->get();
        return response()->json($appointments);
    }

    // Admin: Manual entry
    public function store(Request $request)
    {
        // Same validation as book, but allows setting status
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date_format:Y-m-d',
            'time' => 'required|string|max:50',
            'type' => 'required|string|max:255',
            'notes' => 'nullable|string',
            'status' => 'sometimes|in:Upcoming,Completed,Cancelled'
        ]);

        $validated['status'] = $validated['status'] ?? 'Upcoming';

        $appointment = Appointment::create($validated);

        return response()->json($appointment, 201);
    }

    // Admin: Update status
    public function update(Request $request, $id)
    {
        $appointment = Appointment::findOrFail($id);

        $validated = $request->validate([
            'status' => 'required|in:Upcoming,Completed,Cancelled'
        ]);

        $appointment->update($validated);

        return response()->json($appointment);
    }

    // Admin: Delete appointment
    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();
        return response()->json(null, 204);
    }
}
