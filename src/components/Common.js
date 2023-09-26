
export function scrollToTop () {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function handleEmailClick ()  {
    const recipient = "recipient@example.com";
    const subject = "Hello from React!";
    const body = "This is the body of the email.";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };