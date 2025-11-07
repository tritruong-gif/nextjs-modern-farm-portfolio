// app/contact/actions.ts
"use server";

export async function handleContactForm(formData: FormData) {
  // 1. Retrieve the form data
  const name = formData.get('name');
  const phone = formData.get('phone');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // 2. Action (as requested, just log the data)
  console.log("--- NEW CONTACT FORM SUBMISSION ---");
  console.log("Name:", name);
  console.log("Phone:", phone);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);
  console.log("-----------------------------------");

  // 3. Return a success response
  // In a real app, you would add error handling
  return { success: true, message: "Message sent successfully!" };
}