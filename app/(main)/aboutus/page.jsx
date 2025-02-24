import React from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>About Us | Random Coders - Learn, Build, Collaborate</title>
        <meta
          name="description"
          content="Random Coders is a developer community for coding help, project ideas, and open-source collaboration. Join us to enhance your coding skills!"
        />
        <meta
          name="keywords"
          content="developer community, coding projects, open-source, programming help, collaboration"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen container mx-auto max-w-5xl text-foreground bg-background pt-5">
        <h1 className="text-3xl font-bold mb-4">About Random Coders</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p className="text-lg mb-4">
            <strong>Random Coders</strong> is a hub for developers seeking
            **coding help, project ideas, and collaboration opportunities**.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
          <p className="mb-4">
            Our blog categorizes projects across various domains, making it easy
            to find challenges suited to your skill level. Whether you're a
            beginner or an experienced developer, you can **explore, contribute,
            and collaborate on open-source projects**.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Join Our Community</h2>
          <p className="mb-4">
            Connect with like-minded developers through our{" "}
            <strong>Community Guide</strong>. Discover exciting projects, stay
            updated with best practices, and sharpen your expertise through
            hands-on tutorials.
          </p>
        </section>

        <p className="mt-6 font-semibold">By - Random Coders</p>
      </div>
    </>
  );
};

export default AboutPage;
