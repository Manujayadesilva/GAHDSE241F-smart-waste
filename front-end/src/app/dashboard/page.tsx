"use client"
import { useEffect, useState } from "react";
import { auth, getUserRole } from "../../firebase/auth";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";

const UserDashboard = () => {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      const user = auth.currentUser;

      // Ensure the user is loaded before checking role
      if (!user) {
        console.log("User not found, redirecting...");
        router.push("/login");
        return;
      }

      try {
        const userRole = await getUserRole(user.uid);
        console.log("User Role:", userRole);
        setRole(userRole);

        // Redirect only if the role is admin
        if (userRole === "admin") {
          router.push("/admin/dashboard");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        router.push("/login");
      }
    };

    // Wait for Firebase authentication state to update
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkUserRole();
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [router]);

  if (!role) return <p>Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        <p className="text-gray-600">Track your waste bins and access waste management services.</p>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">Your Bins</h2>
            <p className="text-2xl">5</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">Full Bins</h2>
            <p className="text-2xl">2</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">Pickup Requests</h2>
            <p className="text-2xl">1</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
