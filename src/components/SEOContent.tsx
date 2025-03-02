import React from "react";

const SEOContent = () => {
  return (
    <section
      id="fancy-fonts-content"
      className="mt-10 p-6 bg-secondary text-secondary-foreground rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        Welcome to FancyFonts
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        The Ultimate Font Customization Tool! Want to make your text stand out?
        FancyFonts allows you to apply cool and unique fonts to your messages,
        social media posts, and more—all with a few clicks!
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        How It Works
      </h2>
      <ol className="list-decimal list-inside text-muted-foreground space-y-2">
        <li>
          <strong>Type Your Text</strong> – Start by typing your desired text
          into the input box.
        </li>
        <li>
          <strong>Select a Font</strong> – Choose from a variety of stylish and
          unique fonts.
        </li>
        <li>
          <strong>See the Magic</strong> – Watch your text transform into the
          selected font in real-time!
        </li>
        <li>
          <strong>Copy & Share</strong> – Once you’re happy with your text, just
          copy it and share it anywhere—on social media, in messages, and more!
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        Why Use FancyFonts?
      </h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        <li>
          <strong>Easy to Use</strong> – Simply type, select a font, and copy
          with a click. No complicated setup needed.
        </li>
        <li>
          <strong>Wide Selection</strong> – Choose from a variety of fonts that
          are perfect for any occasion.
        </li>
        <li>
          <strong>Works Everywhere</strong> – Copy and paste your text wherever
          you want—social media, messaging apps, emails, and more.
        </li>
        <li>
          <strong>No Installation Needed</strong> – Access FancyFonts directly
          from your browser—no downloads or installations required.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        Frequently Asked Questions (FAQs)
      </h2>
      <details className="bg-muted p-4 rounded-lg mb-2">
        <summary className="font-semibold cursor-pointer">
          Do I need an account to use FancyFonts?
        </summary>
        <p className="mt-2 text-muted-foreground">
          No! You can start using FancyFonts immediately without creating an
          account or signing in.
        </p>
      </details>
      <details className="bg-muted p-4 rounded-lg mb-2">
        <summary className="font-semibold cursor-pointer">
          Is FancyFonts free to use?
        </summary>
        <p className="mt-2 text-muted-foreground">
          Yes! FancyFonts is completely free to use—no hidden fees, no
          subscriptions!
        </p>
      </details>
      <details className="bg-muted p-4 rounded-lg mb-2">
        <summary className="font-semibold cursor-pointer">
          Can I use FancyFonts on mobile devices?
        </summary>
        <p className="mt-2 text-muted-foreground">
          Absolutely! FancyFonts is mobile-friendly, so you can customize your
          text and copy it on the go.
        </p>
      </details>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3 text-center">
        Start Customizing Your Text Now!
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed text-center">
        Make your messages and posts stand out with stylish fonts. Get started
        with FancyFonts today and let your text shine! 🌟
      </p>
    </section>
  );
};

export default SEOContent;
