import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>

      <p>
        Welcome to Quiet-Lux! This is a shopping app created for educational and
        demo purposes. While it serves as a demonstration of most expected
        functionalities, please note that it is not a fully functional
        marketplace for real transactions.
      </p>
      <p>
        We are committed to using open-source and legal assets to build this
        application. Special thanks to Icons8 for providing high-quality icons
        and Favicon.io for the favicon.
      </p>
      <p>
        If you have any suggestions, questions, or feedback, feel free to reach
        out to us on our GitHub repository:{" "}
        <a
          href="https://github.com/Israel-Laguan/demo-marketplace"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        .
      </p>
    </div>
  );
}
