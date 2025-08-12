export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">Sirtify</h4>
          <p className="text-gray-600 text-sm">
            Skill • Practice • Progress platform helping learners build real
            experience and transform careers.
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-900 mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/about" className="hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-orange-500">
                Programs
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-orange-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-orange-500">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-900 mb-3">Contact</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>support@sirtify.com</li>
            <li>+91 00000 00000</li>
            <li>Mon - Fri, 9am - 6pm IST</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} Sirtify. All rights reserved.
          </span>
          <div className="space-x-4">
            <a href="#privacy" className="hover:text-orange-500">
              Privacy
            </a>
            <a href="#terms" className="hover:text-orange-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
