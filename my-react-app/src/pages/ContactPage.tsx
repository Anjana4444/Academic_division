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
      <section className="relative h-64 w-full overflow-hidden">
        <img
          src="/uop2.jpg"
          alt="University Campus"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-[#4a0b16]/70 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl font-bold tracking-widest uppercase">
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
            className="bg-white shadow-lg px-6 py-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-200 no-underline"
          >
            <span className="text-4xl mb-4">{method.icon}</span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#4a0b16] mb-2">
              {method.actionText}
            </span>
            <p className="text-gray-500 text-xs leading-relaxed">{method.title}</p>
          </a>
        ))}
      </div>

      {/* Map section */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#c9922a] mb-3">
          Location
        </p>
        <div className="w-full h-72 rounded-lg overflow-hidden border border-[#80000020]">
          <iframe
            title="University of Peradeniya"
            src="https://maps.google.com/maps?q=7.254004,80.596754&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  )
}