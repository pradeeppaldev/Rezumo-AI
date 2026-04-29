import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gradient mb-4">Rezumo AI</h3>
          <p className="text-gray-300 mb-4">
            Revolutionizing resume optimization with AI-powered ATS scoring and personalized feedback. 
            Get your dream job with better inputs and smarter outcomes. ✨
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6 text-gradient">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/upload" className="text-gray-300 hover:text-white transition-colors">Upload Resume</Link></li>
            <li><Link to="/wipe" className="text-gray-300 hover:text-white transition-colors">Clear Data</Link></li>
            <li><Link to="/auth" className="text-gray-300 hover:text-white transition-colors">Account</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-xl font-semibold mb-6 text-gradient">Made with</h4>
          <p className="text-gray-300 mb-4">AI & ❤️ for job seekers worldwide</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Rezumo AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

