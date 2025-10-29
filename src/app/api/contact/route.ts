import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // 📧 EMAIL DATA IS SENT HERE:
    // Currently, the form data is logged to your console
    // You can see it in your terminal when you run: npm run dev
    console.log('📧 Contact form submission received:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // 📍 WHERE TO FIND THE EMAIL DATA:
    // 1. Open your terminal where you run "npm run dev"
    // 2. Submit the contact form
    // 3. You'll see the email data logged there
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
