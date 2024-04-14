import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7 font-['Montserrat']">
            About Me
          </h1>
          <div className="text-md text-gray-300 flex flex-col gap-6 font-['Roboto'] tracking-wide">
            <p>
              Hey there, I'm Mohd Aadil, currently on the exhilarating journey
              of pursuing my BTech in Computer Science. Ever since I dipped my
              toes into the world of technology, I've been captivated by the
              magic of the MERN stack - MongoDB, Express.js, React.js, and
              Node.js. It's not just about coding for me; it's about weaving
              together creativity and functionality to build something truly
              remarkable. Join me as I dive deeper into the endless
              possibilities of web development, where every line of code is
              infused with my passion for innovation. Let's embark on this
              adventure together, where each challenge is a chance to learn and
              grow.
            </p>
            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. I am always learning and exploring new technologies, so
              be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
            <Link
              to="/https://mohd-aadil-git-main-mohd-aadils-projects.vercel.app/"
              className="mt-10"
            >
              <Button
                gradientDuoTone="purpleToBlue"
                outline
                fullSized
                className="uppercase tracking-widest"
              >
                Visit my Site
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
