export default function Contact() {
    return (
        <section id="contact">
            <h2 className="section-title">Place an Order</h2>
            <p className="section-subtitle">
                Reach out via WhatsApp or email
            </p>
            <div className="contact-grid">
                <div className="contact-item">
                    <p className="contact-label">WhatsApp</p>
                    <p className="contact-detail">
                        <a
                            href="https://wa.me/918169165790"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            +91 81691 65790
                        </a>
                    </p>
                </div>
                <div className="contact-item">
                    <p className="contact-label">Email</p>
                    <p className="contact-detail">
                        <a href="mailto:hello@cookedwithcare.in">
                            hello@cookedwithcare.in
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
