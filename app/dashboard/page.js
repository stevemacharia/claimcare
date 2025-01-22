'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");  // Redirect to login page if not authenticated
    return null; // Prevent rendering until the redirect happens
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>Role: {session.user.role}</p>
    </div>
  );
}
