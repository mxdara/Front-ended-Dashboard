

import React, { useEffect, useState } from 'react';
import BackButton from '@/components/BackButton';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Button } from '@/components/ui/button';
import posts from '@/data/posts';
import { useToast } from '@/hooks/use-toast';

// Define the form schema
const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  body: z.string().min(1, { message: 'Body is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
});

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(), // Ensure `id` is a string
  }));
}

// Main component
interface PostEditPageProps {
  params: { id: string };
}

const PostEditPage: React.FC<PostEditPageProps> = ({ params }) => {
  const { toast } = useToast();
  const [post, setPost] = useState(() =>
    posts.find((p) => p.id.toString() === params.id)
  );

  useEffect(() => {
    if (!post) {
      toast({
        title: 'Error',
        description: 'Post not found!',
      });
    }
  }, [post, toast]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: 'Post Updated',
      description: `Updated by ${data.author} on ${data.date}`,
    });
  };

  if (!post) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <BackButton text="Back To Posts" link="/posts" />
      <h3 className="text-2xl mb-4">Edit Post {post.id}</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter Body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Author" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Update Post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEditPage;
