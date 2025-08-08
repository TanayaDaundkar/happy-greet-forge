
// Legacy API services removed for security
// Contact functionality can be implemented using Supabase forms or edge functions if needed

export const contactService = {
  submitContactForm: async (contactData: { name: string; email: string; subject: string; message: string }) => {
    // For now, just show success message
    // In production, implement with Supabase edge function or form handler
    console.log('Contact form submitted:', contactData);
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
  }
};
