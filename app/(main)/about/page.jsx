import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen container mx-auto max-w-5xl text-foreground bg-background pt-5">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
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
      </blockquote>
    </div>
  );
};

export default AboutPage;
