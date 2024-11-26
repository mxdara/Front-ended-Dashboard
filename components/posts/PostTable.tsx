import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import { Post } from "@/types/post"
import posts from "@/data/posts"

interface PostTableProps {
  limit?: number; // Limit the number of posts to display
  title?: string; // Title of the table
}



export default function PostTable({limit, title} : PostTableProps) {
  // Sort based on date
  const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Limit the number of posts
  const limitedPosts: Post[] = limit ? sortedPosts.slice(0, limit) : sortedPosts
  return (
    <>
      <h3 className="text-2xl mb-4 font-semibold mt-10">
        {title ? title : 'Posts'}
      </h3>
      <Table>
        <TableCaption>Table Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Title</TableHead>
            <TableHead className='w-[150px] text-right'>Author</TableHead>
            <TableHead className='w-[150px] text-right'>Date</TableHead>
            <TableHead className='w-[100px] text-center'>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { limitedPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className='w-[200px] text-center'>
                {post.author}
              </TableCell>
              <TableCell className='w-[150px] text-right'>
                {post.title}
              </TableCell>
              <TableCell className='w-[150px] text-right'>
                {post.date}
              </TableCell>
              <TableCell className="w-[100px] text-right">
                <Link href={`/posts/${post.id}`}>
                  <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded text-xs'>
                    View
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
