import profile from '../data/profile';

const Contact = () => {
  const {
    email,
    phone,
    location,
    socials,
    contactDetails,
  } = profile;

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-80">
          Interested in working together or have a question?
          Let’s connect.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* ===== Contact Info ===== */}
        <div className="space-y-6">
          <ContactCard title="Email" value={email} />
          <ContactCard title="Phone" value={phone} />
          <ContactCard title="Location" value={location} />

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {socials.github && (
              <SocialLink
                href={socials.github}
                label="GitHub"
              />
            )}
            {socials.linkedin && (
              <SocialLink
                href={socials.linkedin}
                label="LinkedIn"
              />
            )}
          </div>
        </div>

        {/* ===== Contact Form / Map ===== */}
        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-xl">
          {contactDetails.showForm ? (
            <form className="space-y-5">
              <h3 className="text-2xl font-semibold mb-4">
                Send a Message
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <iframe
              title="Google Map"
              src={contactDetails.gmapEmbedLink}
              className="w-full h-96 rounded-xl border-none"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
};

/* ===== Reusable Components ===== */

const ContactCard = ({ title, value }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
    <p className="text-sm opacity-60 mb-1">{title}</p>
    <p className="font-medium break-all">{value}</p>
  </div>
);

const SocialLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="px-5 py-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-blue-600 hover:text-white transition text-sm"
  >
    {label}
  </a>
);

export default Contact;
