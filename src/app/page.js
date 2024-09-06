'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   const userData = localStorage.getItem('user');

  //   if (userData) {
  //     setUser(JSON.parse(userData));
  //   } else {
  //     router.push('/login');
  //   }
  // }, [router]);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  // Conditionally render based on user role
  return (
    <div className="p-8">
      {/* <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1> */}
        <AdminHomePage />

      {/* {user.role === 'admin' ? (
        <AdminHomePage />
      ) : user.role === 'candidate' ? (
        <CandidateHomePage />
      ) : (
        <p className="text-red-500">Error: Unknown role</p>
      )} */}
    </div>
  );
}

const AdminHomePage = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      <ul className="mt-4 space-y-2">
        <li className="p-4 bg-blue-100 rounded">Manage Users</li>
        <li className="p-4 bg-blue-100 rounded">View All Resumes</li>
        <li className="p-4 bg-blue-100 rounded">Analytics</li>
      </ul>
    </div>
  );
}

const CandidateHomePage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Candidate Dashboard</h2>
      <ul className="mt-4 space-y-2">
        <li className="p-4 bg-green-100 rounded">View My Resume</li>
        <li className="p-4 bg-green-100 rounded">Edit Resume</li>
        <li className="p-4 bg-green-100 rounded">Job Applications</li>
      </ul>
    </div>
  )
}