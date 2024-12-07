import React from 'react';

function Footer() {
  return (
    <footer className="bg-white">
      {/* Add a top border line here */}
      <hr className="border-t-2 border-gray-300" />

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
             
              <span className="self-center text-gray-600 text-2xl font-semibold whitespace-nowrap">BookStore</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Sorayut™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Add social media links here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
