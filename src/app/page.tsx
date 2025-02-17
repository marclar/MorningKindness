import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1>Welcome to Morning Kindness</h1>
        <p className="mb-8 text-lg">
          Start your day with a friendly wake-up call, perfectly timed to your schedule.
        </p>
        
        <div className="space-x-4">
          <Link href="/auth/login" className="btn-primary">
            Get Started
          </Link>
          <Link href="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3>Reliable Wake-up Calls</h3>
            <p>Never oversleep again with our dependable calling system.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3>Flexible Scheduling</h3>
            <p>Set different wake-up times for each day of the week.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3>Simple Setup</h3>
            <p>Quick phone number verification gets you started in minutes.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
