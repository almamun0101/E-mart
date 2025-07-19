function Footer() {
  return (
    <footer className="bg-sec-500 p-10 mt-10 text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="font-bold text-xl py-3">About</h2>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Who we are?</li>
              <li>Our Vision</li>
              <li>Our Team</li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="font-bold text-xl py-3">Services</h2>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Online Ordering</li>
              <li>Home Delivery</li>
              <li>Customer Support</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="font-bold text-xl py-3">Contact</h2>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Email: support@yourdomain.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h2 className="font-bold text-xl py-3">Follow Us</h2>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} Al Mamun Khan . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
