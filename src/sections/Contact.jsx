import { useState } from 'react';
import { profile } from '../data/profile';
import { mailto } from '../lib/links';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;
    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${formData.get('name')}`);
      const body = encodeURIComponent(
        `${formData.get('message')}\n\nReply to: ${formData.get('email')}`,
      );
      window.location.href = `${mailto(profile.email)}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok)
        throw new Error('The message could not be sent. Please try again or email me directly.');
      setStatus('success');
      form.reset();
    } catch (sendError) {
      setStatus('error');
      setError(sendError.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="05 / Contact"
          title="Let’s start a conversation."
          description="Have a question or want to collaborate? Send a note."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="p-6 sm:p-8 lg:col-span-3">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label
                  className="flex flex-col gap-2 text-sm text-slate-300"
                  htmlFor="contact-name"
                >
                  Name
                  <input
                    className="form-field"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    minLength="2"
                  />
                </label>
                <label
                  className="flex flex-col gap-2 text-sm text-slate-300"
                  htmlFor="contact-email"
                >
                  Email
                  <input
                    className="form-field"
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <label
                className="flex flex-col gap-2 text-sm text-slate-300"
                htmlFor="contact-message"
              >
                Message
                <textarea
                  className="form-field min-h-36 resize-y"
                  id="contact-message"
                  name="message"
                  required
                  minLength="10"
                />
              </label>
              <label className="sr-only" htmlFor="contact-company">
                Leave this field empty
              </label>
              <input
                className="sr-only"
                id="contact-company"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
              />
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
              {status === 'success' && (
                <p role="status" className="text-sm text-accent">
                  Thanks for reaching out. Your message has been sent.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-sm text-red-300">
                  {error}
                </p>
              )}
              {!endpoint && (
                <p className="text-xs text-slate-500">
                  Your email app will open to send the message.
                </p>
              )}
            </form>
          </Card>
          <Card className="flex flex-col justify-between p-7 lg:col-span-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.18em] text-accent">Email</p>
              <a
                className="mt-3 inline-block break-all text-lg text-white underline decoration-white/20 underline-offset-4 hover:decoration-accent"
                href={mailto(profile.email)}
              >
                {profile.email}
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              {Object.entries(profile.socials).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-slate-400 transition hover:text-accent"
                >
                  {label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
