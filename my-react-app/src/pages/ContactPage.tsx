interface ContactMethod {
  id: number
  title: string
  actionText: string
  icon: string
  link: string
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: 'Academic Establishments Division, University of Peradeniya, Peradeniya, Sri Lanka',
    actionText: 'Address',
    icon: '📍',
    link: '#',
  },
  {
    id: 2,
    title: 'Direct: +94 81 208 5208 · Internal: +94 81 239 2341 · Ext: 2341 / 2342 · Fax: 081-2388880',
    actionText: 'Phone',
    icon: '📞',
    link: 'tel:+94812392341',
  },
  {
    id: 3,
    title: 'Senior Assistant Registrar: karunaratnemlwom@gs.pdn.ac.lk · Assistant Registrar: sithuminiw@gs.pdn.ac.lk · acestpera@gs.pdn.ac.lk',
    actionText: 'Email',
    icon: '✉️',
    link: 'mailto:acestpera@gs.pdn.ac.lk',
  },
]

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* Hero banner */}
      <section className="relative h-[370px] w-full overflow-hidden">
        <img
          src="/aeu.png"
          alt="University Campus"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-[#4a0b16]/60 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white font-sans text-4xl font-bold tracking-widest uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            Contact 
          </h1>
        </div>
      </section>

      {/* Contact cards */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-30 grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.link}
            className="bg-[white] px-6 py-10 flex flex-col items-center text-center [box-shadow:inset_0_0_15px_rgba(201,146,42,0.25)] hover:[box-shadow:inset_0_0_15px_rgba(201,146,42,0.15),0_10px_25px_-5px_rgba(74,11,22,0.4)] hover:-translate-y-2 transition-all duration-300 no-underline rounded-xl"
          >
            <span className="text-4xl mb-4">{method.icon}</span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#4a0b16] mb-2">
              {method.actionText}
            </span>
            <p className="text-gray-500 text-xs leading-relaxed">{method.title}</p>
          </a>
        ))}
      </div>

      {/* Contact form */}
<div className="max-w-4xl mx-auto px-6 mb-16">
  <div className="bg-[white] rounded-xl shadow-md border-l-4 border-[#c9922a] p-8">
    
    <h2 className="text-2xl font-bold text-[#4a0b16] mb-6 flex items-center gap-2">
      <span className="w-1.5 h-6 bg-[#4a0b16] rounded-full inline-block"></span>
      Send Us a Message
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-700">Full Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#4a0b16] transition-colors duration-150"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-700">Email Address <span className="text-red-500">*</span></label>
        <input
          type="email"
          placeholder="student@university.edu"
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#4a0b16] transition-colors duration-150"
        />
      </div>

      {/* Department */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-700">Department / Office</label>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#4a0b16] transition-colors duration-150 bg-white">
          <option>General Inquiry</option>
          <option>Academic Staff Appointments</option>
          <option>Leave Applications</option>
          <option>Promotions</option>
          <option>Other</option>
        </select>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-700">Subject <span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Brief subject of your inquiry"
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#4a0b16] transition-colors duration-150"
        />
      </div>

      {/* Message - full width */}
      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-sm text-gray-700">Message <span className="text-red-500">*</span></label>
        <textarea
          rows={6}
          placeholder="Please provide detailed information about your inquiry..."
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#4a0b16] transition-colors duration-150 resize-y"
        />
      </div>

    </div>

    {/* Submit button */}
    <button className="mt-6 w-full bg-[#4a0b16] text-white font-semibold py-3.5 rounded-lg hover:bg-[#6b1020] transition-colors duration-200 tracking-wide">
      Send Message to University
    </button>

  </div>
</div>

    </div>
  )
}