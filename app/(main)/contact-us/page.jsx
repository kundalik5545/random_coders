import Link from "next/link";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="contact-us min-h-screen container mx-auto max-w-5xl text-foreground bg-background pt-5">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <blockquote className="italic">
        <p className="text-lg mb-4">
          <strong>Random Coders</strong> - 💡 Get involved, learn, and build
          together!
        </p>
        <p className="mb-4">
          A hub for developers seeking coding help, project ideas, and
          collaboration opportunities. Our blog categorizes projects across
          various domains, making it easy to find the right challenge for your
          skill level. Whether you're a beginner or an experienced developer,
          you can explore, contribute, and collaborate on open-source projects.
        </p>
        <p className="mb-4">
          Join our <strong>community guide</strong>, where contributors can
          discover projects, connect with like-minded developers, and enhance
          their coding skills. Stay updated with best practices, tutorials, and
          hands-on projects to sharpen your expertise.
        </p>

        <div>
          <h2 className="text-2xl font-bold">To connect with us</h2>
          <p>If you have any questions, feel free to reach out to us at:</p>
          Email:{" "}
          <Link
            className="underline text-blue-500"
            href="mailto:admin@randomcoders.com"
            aria-label="Contact Admin via Email"
          >
            Contact Admin
          </Link>
        </div>

        <p className="pt-3">By -</p>
        <p>Random Coders...</p>
        <Link
          className="underline text-blue-500"
          href="mailto:admin@randomcoders.com"
          aria-label="Contact Admin via Email"
        >
          Contact Admin
        </Link>
      </blockquote>
    </div>
  );
};

export default ContactUsPage;
