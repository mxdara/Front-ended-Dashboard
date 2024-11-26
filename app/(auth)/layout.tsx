export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-[100vh] flex items-center justify-center relative border border-black'>
      {children}
    </div>
  )
}