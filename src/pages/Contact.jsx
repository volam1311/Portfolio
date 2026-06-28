import { useState } from 'react'
import { getSite } from '../lib/content'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import { SocialIcon } from '../components/ui/Icons'

export default function Contact() {
  const { pages, contact, social } = getSite()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = (field) =>
    `w-full border bg-bg-form px-4 py-3.5 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-gray-300 ${
      errors[field] ? 'border-red-500' : 'border-transparent'
    }`

  return (
    <Container className="pb-8 pt-8 sm:pt-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <PageHero
            label={pages.contact.label}
            title={pages.contact.title}
            description={pages.contact.description}
          />

          <div className="mt-8 flex flex-col gap-6 sm:mt-10">
            <div>
              <span className="mb-1.5 block text-[10px] tracking-widest text-gray-400">EMAIL</span>
              <a
                href={`mailto:${contact.email}`}
                className="text-[15px] text-black transition-colors hover:text-gold"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <span className="mb-1.5 block text-[10px] tracking-widest text-gray-400">BASED IN</span>
              <span className="text-[15px] text-black">{contact.location}</span>
            </div>
            <div>
              <span className="mb-1.5 block text-[10px] tracking-widest text-gray-400">RESPONSE TIME</span>
              <span className="text-[15px] text-black">{contact.responseTime}</span>
            </div>
          </div>

          <div className="mt-8 flex gap-2 sm:mt-10">
            {social.map((item) => (
              <a
                key={item.icon}
                href={item.url}
                className="flex h-10 w-10 items-center justify-center border border-border text-gray-400 transition-colors hover:border-gray-300 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:pt-12">
          {submitted ? (
            <div className="border border-border bg-bg-form p-8" role="status">
              <p className="text-[15px] text-black">
                Thank you for your message. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-[10px] tracking-widest text-gray-400">
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={inputClass('name')}
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="mt-1.5 block text-xs text-red-500">{errors.name}</span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[10px] tracking-widest text-gray-400">
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputClass('email')}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="mt-1.5 block text-xs text-red-500">{errors.email}</span>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[10px] tracking-widest text-gray-400">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${inputClass('message')} min-h-[140px] resize-y`}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="mt-1.5 block text-xs text-red-500">{errors.message}</span>
                )}
              </div>
              <Button type="submit" className="mt-2 w-full">
                SEND MESSAGE ↗
              </Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  )
}
