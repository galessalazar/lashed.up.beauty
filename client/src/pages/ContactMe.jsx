import { FaInstagram } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <div className="p-10">
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <p className="mt-4">Questions prior to booking? Reach out below:</p>

          <a
            href="https://www.instagram.com/_lashedupbeautybar_"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1 text-sm font-medium text-gray-500 hover:text-black hover:text-lg  flex items-center space-x-2"
          >
            <FaInstagram size={18} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
