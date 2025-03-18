import { Link } from "react-router-dom"

export const Home = () => {
    return <div className="flex min-h-screen flex-col">
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Wallet Icon */}
            <div className="h-12 w-12 bg-white rounded-xl text-purple-600 p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">PayTM</h1>
            <p className="max-w-[600px] text-white md:text-xl">Fast, secure payments at your fingertips</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link to='signup'><button className="px-4 py-2 rounded-md bg-white text-purple-600 hover:bg-gray-100 font-medium">
                Sign Up Now
              </button></Link>
              <Link to='signin'><button className="px-4 py-2 rounded-md border border-white text-white hover:bg-white/20 font-medium">
                Sign In
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Balance Section */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="rounded-lg shadow-lg bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 text-white p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm opacity-80">Available Balance</p>
              <h2 className="text-3xl font-bold">₹12,500.00</h2>
              <div className="flex justify-between mt-4">
                <button className="px-4 py-2 rounded-md border border-white text-white hover:bg-white/20 font-medium">
                  Add Money
                </button>
                <button className="px-4 py-2 rounded-md border border-white text-white hover:bg-white/20 font-medium">
                  Passbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Quick Access
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {/* Send Money */}
            <div className="rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </div>
              <span className="text-xs font-medium">Send</span>
            </div>

            {/* Pay Bills */}
            <div className="rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <span className="text-xs font-medium">Pay</span>
            </div>

            {/* Shop */}
            <div className="rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <span className="text-xs font-medium">Shop</span>
            </div>

            {/* Recharge */}
            <div className="rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <span className="text-xs font-medium">Recharge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-8 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
            {/* Bills */}
            <div className="rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col items-center text-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-purple-600"
              >
                <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                <path d="M12 17.5v-11"></path>
              </svg>
              <span className="text-xs font-medium">Bills</span>
            </div>

            {/* Mobile */}
            <div className="rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col items-center text-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-cyan-500"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
              <span className="text-xs font-medium">Mobile</span>
            </div>

            {/* Gifts */}
            <div className="rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col items-center text-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-blue-600"
              >
                <path d="M20 12v10H4V12"></path>
                <path d="M2 7h20v5H2z"></path>
                <path d="M12 22V7"></path>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
              <span className="text-xs font-medium">Gifts</span>
            </div>

            {/* Bus */}
            <div className="rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col items-center text-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-purple-600"
              >
                <path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2"></path>
                <path d="M14 17H9"></path>
                <circle cx="6.5" cy="17.5" r="2.5"></circle>
                <circle cx="16.5" cy="17.5" r="2.5"></circle>
              </svg>
              <span className="text-xs font-medium">Bus</span>
            </div>

            {/* Flights */}
            <div className="rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col items-center text-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-cyan-500"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
              <span className="text-xs font-medium">Flights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Recent Transactions
            </h2>
            <button className="text-sm text-purple-600 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {/* Transaction 1 */}
            <div className="rounded-lg border border-gray-200 shadow-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  JD
                </div>
                <div>
                  <p className="text-sm font-medium">Paid to John Doe</p>
                  <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                </div>
              </div>
              <p className="text-sm font-medium text-red-500">-₹250</p>
            </div>

            {/* Transaction 2 */}
            <div className="rounded-lg border border-gray-200 shadow-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  EC
                </div>
                <div>
                  <p className="text-sm font-medium">Electricity Bill</p>
                  <p className="text-xs text-gray-500">Yesterday, 6:15 PM</p>
                </div>
              </div>
              <p className="text-sm font-medium text-red-500">-₹425</p>
            </div>

            {/* Transaction 3 */}
            <div className="rounded-lg border border-gray-200 shadow-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  SM
                </div>
                <div>
                  <p className="text-sm font-medium">Received from Sarah M.</p>
                  <p className="text-xs text-gray-500">Mar 15, 2:30 PM</p>
                </div>
              </div>
              <p className="text-sm font-medium text-green-500">+₹1,200</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="w-full py-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {/* Wallet Icon */}
          <div className="h-8 w-8 bg-white rounded-md text-purple-600 p-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
          </div>
          <p className="text-sm">© 2025 PayEase. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs hover:underline">
              Terms
            </a>
            <a href="#" className="text-xs hover:underline">
              Privacy
            </a>
            <a href="#" className="text-xs hover:underline">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
}