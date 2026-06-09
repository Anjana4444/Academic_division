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
    <div className="w-full bg-white text-gray-900 font-sans min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      
      {/* Top Section: Split Info & Circular Artwork Mask */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Left Column: Headline and Primary Meta Contacts */}
        <div className="flex flex-col items-start justify-center md:pr-6">
          <h1 className="text-4xl font-black tracking-wider text-gray-900 mb-3 uppercase">
            CONTACT US
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
            Academic Establishments Division — We are here to meet any administrative need and support our university community online.
          </p>
          
          {/* Accent Divider Line */}
          <div className="w-52 h-[1.5px] bg-gray-300 mb-6" />
          
          <div className="space-y-2.5 text-sm sm:text-base font-medium text-gray-800">
            <p>
              <span className="font-bold">Phone:</span>{' '}
              <a href="tel:+94812085208" className="underline hover:text-gray-500 transition-colors">
                1 (232) 252 55 22
              </a>
            </p>
            <p>
              <span className="font-bold">Location:</span> Senate Building, University of Peradeniya, Sri Lanka
            </p>
            <p>
              <span className="font-bold">Mail:</span>{' '}
              <a href="mailto:acestpera@gs.pdn.ac.lk" className="underline hover:text-gray-500 transition-colors">
                acestpera@gs.pdn.ac.lk
              </a>
            </p>
          </div>
        </div>

        {/* Right Column: Perfect Circular Image Mask */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[420px] aspect-square rounded-full overflow-hidden border-[10px] border-gray-50 shadow-sm">
            <img
              src="/aeu.png"
              alt="University Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* Bottom Section: 3 Flat Accent Information Blocks */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Block 1: Detailed Phone Matrix */}
        <div className="bg-[#7d6a6a] p-8 flex flex-col min-h-[190px]">
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4 flex items-center gap-2">
            <span>📞</span> CALL US
          </h3>
          <div className="text-xs text-gray-700 space-y-1.5 font-medium leading-relaxed">
            <p><span className="font-bold text-gray-900">Direct:</span> +94 81 208 5208</p>
            <p><span className="font-bold text-gray-900">Internal:</span> +94 81 239 2341</p>
            <p><span className="font-bold text-gray-900">Ext:</span> 2341 / 2342</p>
            <p><span className="font-bold text-gray-900">Fax:</span> 081-2388880</p>
          </div>
        </div>

        {/* Block 2: Formal Postal Location */}
        <div className="bg-[#7d6a6a] p-8 flex flex-col min-h-[190px]">
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4 flex items-center gap-2">
            <span>📍</span> LOCATION
          </h3>
          <p className="text-xs text-white- font-medium leading-relaxed">
            Academic Establishments Division,<br />
            Senate Building,<br />
            University of Peradeniya,<br />
            Peradeniya 20400,<br />
            Sri Lanka.
          </p>
        </div>

        {/* Block 3: Departmental Email Grid */}
        <div className="bg-[#7d6a6a] p-8 flex flex-col min-h-[190px]">
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4 flex items-center gap-2">
            <span>✉️</span> EMAIL CHANNELS
          </h3>
          <div className="text-xs text-white-700 space-y-2 font-medium leading-relaxed break-all">
            <p>
              <span className="font-bold text-white-900 block mb-0.5">Main General:</span>
              <a href="mailto:acestpera@gs.pdn.ac.lk" className="hover:underline">acestpera@gs.pdn.ac.lk</a>
            </p>
            <p>
              <span className="font-bold text-gray-900 block mb-0.5">Senior Assistant Registrar:</span>
              <a href="mailto:karunaratnemlwom@gs.pdn.ac.lk" className="hover:underline">karunaratnemlwom@gs.pdn.ac.lk</a>
            </p>
            <p>
              <span className="font-bold text-gray-900 block mb-0.5">Assistant Registrar:</span>
              <a href="mailto:sithuminiw@gs.pdn.ac.lk" className="hover:underline">sithuminiw@gs.pdn.ac.lk</a>
            </p>
          </div>
        </div>

      </div>


      <div className="max-w-4xl  px-6 mb-16 py-10 mx-auto">
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