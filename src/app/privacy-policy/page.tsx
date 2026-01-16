import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-600">
            <p>Last updated: January 2026</p>
            <p>
              At Propecare Infra Projects, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <h3>1. Information We Collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul>
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            </ul>

            <h3>2. How We Use Your Data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
                <li>To contact you regarding your project inquiries.</li>
                <li>To improve our website and services.</li>
                <li>To comply with a legal or regulatory obligation.</li>
            </ul>

            <h3>3. Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>

            <h3>4. Contact Us</h3>
            <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at info@propecareinfra.com.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
