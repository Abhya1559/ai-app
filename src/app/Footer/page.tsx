const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>&copy; 2025 YourCompany. All rights reserved.</p>
        <nav className="mt-2 md:mt-0">
          <a href="/" className="hover:underline mx-2">Home</a>
          <a href="/about" className="hover:underline mx-2">About</a>
          <a href="/contact" className="hover:underline mx-2">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
