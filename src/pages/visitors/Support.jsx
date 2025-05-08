import React from "react";
import Card from "../../components/common/Card";
import {
  Send,
  Phone,
  Mail,
  MessageSquare,
  HelpCircle,
  Book,
} from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-3 flex items-center justify-between text-left font-medium hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-gray-500 text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-gray-50 border-t">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Support = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-2">
        <h1 className="text-2xl font-bold">Support</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Contact Support" icon={<MessageSquare size={20} />}>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Subject
                </label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>General Inquiry</option>
                  <option>Technical Issue</option>
                  <option>QR Code Problem</option>
                  <option>Visit Scheduling</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your issue or question..."
                  className="w-full px-3 py-2 border rounded-lg resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button className="w-full sm:w-auto px-6 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors flex items-center justify-center cursor-pointer">
                  <Send size={16} className="mr-2" />
                  Send Message
                </button>
                <span className="text-sm text-gray-500">
                  Typical response time: Within 2 hours
                </span>
              </div>
            </form>
          </Card>

          <Card
            title="Frequently Asked Questions"
            icon={<HelpCircle size={20} />}
          >
            <div className="space-y-3">
              <FAQItem
                question="How do I schedule a visit?"
                answer="You can schedule a visit by clicking the 'Schedule Visit' button on your dashboard and following the prompts to select a date, time, and department."
              />
              <FAQItem
                question="Can I modify or cancel my visit?"
                answer="Yes, you can modify or cancel your scheduled visits by going to the 'My Visits' section and selecting the visit you wish to change. You'll see options to reschedule or cancel."
              />
              <FAQItem
                question="How do I use my QR code to check in?"
                answer="When you arrive at the location, simply present your QR code to the receptionist or scan it at the self-check-in kiosk if available. The system will recognize you and complete your check-in."
              />
              <FAQItem
                question="What if I lose my QR code?"
                answer="You can always access your QR code by logging into your account and going to the 'QR Code' section. You can also regenerate it if needed."
              />
              <FAQItem
                question="How can I update my personal information?"
                answer="Navigate to the 'Profile' section where you can edit and update all your personal details including name, contact information, and company details."
              />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card title="Contact Information">
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone size={20} className="mr-3 text-[#3c73b6] mt-1" />
                <div>
                  <h3 className="font-medium">Phone Support</h3>
                  <p className="text-gray-500">(800) 555-1234</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail size={20} className="mr-3 text-[#3c73b6] mt-1" />
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-gray-500">support@visitorsystem.com</p>
                  <p className="text-sm text-gray-500">24/7 response</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare size={20} className="mr-3 text-[#3c73b6] mt-1" />
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-gray-500">Available 9AM-8PM EST</p>
                  <button className="mt-1 px-3 py-1 bg-[#3c73b6] text-white text-sm rounded-lg hover:bg-[#3c73b6]/90 transition-colors cursor-pointer">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Resources" icon={<Book size={20} />}>
            <div className="space-y-3">
              <a
                href="#"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium">User Guide</h3>
                <p className="text-sm text-gray-500">
                  Complete documentation for visitors
                </p>
              </a>
              <a
                href="#"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium">Video Tutorials</h3>
                <p className="text-sm text-gray-500">
                  Step-by-step visual guides
                </p>
              </a>
              <a
                href="#"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium">Security Information</h3>
                <p className="text-sm text-gray-500">
                  Learn about our security protocols
                </p>
              </a>
              <a
                href="#"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium">Privacy Policy</h3>
                <p className="text-sm text-gray-500">How we handle your data</p>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
