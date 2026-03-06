import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="footer-section-title font-semibold mb-2">Quick Links</h4>
          <ul className="footer-links-list space-y-2">
            <li><Link to="/" className="text-IEEE-Blue">The Phalanx (About)</Link></li>
            <li><Link to="/" className="text-IEEE-Blue">Campaign Trail (Events)</Link></li>
            <li><Link to="/activities" className="text-IEEE-Blue">Current Activities</Link></li>
            <li><Link to="/" className="text-IEEE-Blue">Enlistment (Join)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-section-title font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-600">Email: contact@ieee.example</p>
        </div>

        <div>
          <h4 className="footer-section-title font-semibold mb-2">Follow</h4>
          <p className="text-sm text-gray-600">Social links coming soon</p>
        </div>
      </div>

      <div className="text-center py-4 text-sm text-gray-500">© {new Date().getFullYear()} IEEE Trojan Standard</div>
    </footer>
  )
}

export default Footer