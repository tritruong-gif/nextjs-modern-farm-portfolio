// components/ui/ContactForm.tsx
"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import { handleContactForm } from '@/app/contact/actions';
import CustomImage from './CustomImage';

// Icon for the submit button
const ArrowRightIcon = () => (
  <CustomImage 
    src="/images/icons/arrow.svg" // A dark arrow for the yellow button
    alt="" 
    width={16} 
    height={16} 
  />
);

const ContactForm: React.FC = () => {
  // We don't need useState for fields when using Server Actions directly.
  // The form's 'action' prop handles the submission.
  
  // We can add state to show a "success" or "error" message
  // const [formState, formAction] = useFormState(handleContactForm, null);
  // For this prompt, we'll use the simple form action.

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await handleContactForm(formData);
    // Optionally, handle success/error feedback here
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-white border border-gray-200 rounded-lg"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-3 bg-white border border-gray-200 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-white border border-gray-200 rounded-lg"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 bg-white border border-gray-200 rounded-lg"
        />
      </div>
      <textarea
        name="message"
        placeholder="Write a Message..."
        rows={5}
        required
        className="w-full p-3 bg-white border border-gray-200 rounded-lg"
      />
      
      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="primary" 
        size="md"
        icon={<ArrowRightIcon />}
      >
        Send a Message
      </Button>

      {/* You could add feedback here:
      {formState?.success && (
        <p className="text-brand-green">{formState.message}</p>
      )}
      */}
    </form>
  );
};

export default ContactForm;