'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Lightbulb } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const aiSuggestions: { [key: string]: string } = {
  price:
    "It looks like you're asking about pricing. Our services are tailored to each client. To give you an accurate quote, could you tell us more about your project requirements, like the number of users or office size?",
  quote:
    "It looks like you're asking about pricing. Our services are tailored to each client. To give you an accurate quote, could you tell us more about your project requirements, like the number of users or office size?",
  network:
    "You mentioned networking. We offer a range of services from structured cabling to advanced wireless solutions and security. What specific challenges are you facing with your network?",
  security:
    "You mentioned security. We can help with everything from firewall setup to comprehensive cybersecurity audits. What are your main security concerns right now?",
  software:
    'For software development inquiries, it helps to know the platform (web, mobile), key features, and your estimated timeline. This will help us provide a more accurate response.',
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const messageValue = form.watch('message');

  useEffect(() => {
    const messageLowerCase = messageValue.toLowerCase();
    let suggestionFound = false;
    for (const keyword in aiSuggestions) {
      if (messageLowerCase.includes(keyword)) {
        setAiSuggestion(aiSuggestions[keyword]);
        suggestionFound = true;
        break;
      }
    }
    if (!suggestionFound) {
      setAiSuggestion(null);
    }
  }, [messageValue]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Inquiry about Network Security" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little about your project or question..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {aiSuggestion && (
          <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent-foreground/80 flex gap-3">
            <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-accent">AI Suggestion</h4>
              <p>{aiSuggestion}</p>
            </div>
          </div>
        )}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </form>
    </Form>
  );
}
