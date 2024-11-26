import React from 'react'
import PostTable from '@/components/posts/PostTable'
import BackButton from '@/components/BackButton'
import PostPagination from '@/components/posts/PostPagination'


function PostPage() {
  return (
    <div className='max-w-4xl w-full'>
        <BackButton text='Go Back' link='/' />
        <PostTable title="Latest Posts" />
        <PostPagination />
    </div>
  )
}

export default PostPage