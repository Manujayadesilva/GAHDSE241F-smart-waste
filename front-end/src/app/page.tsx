import Header from "../components/Header";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-col items-center justify-center flex-grow text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Smart Waste Management</h1>
        <p className="text-lg text-gray-600 mb-6">
          Monitor waste levels, track bin locations, and ensure cleaner environments with our smart waste system.
        </p>  
      </main>
      <Footer />
    </div>
  );
}
