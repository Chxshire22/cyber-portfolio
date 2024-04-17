import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faArrowUpRightFromSquare,
  faUser,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import pfp from "../assets/photo1712915487.jpeg";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { Helmet } from "react-helmet-async";


export default function Home() {
  const [projectsArr, setProjectsArr] = useState([]);
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    imgUrl: "",
    githubRepo: "",
    deployment: "",
  });
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "projects"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setProjectsArr((prev) => [...prev, doc.data()]);
      });
    })();
  }, []);

  useEffect(() => {
    if (projectsArr) {
      setCurrentProject({
        title: projectsArr[projectIndex]?.title,
        description: projectsArr[projectIndex]?.description,
        imgUrl: projectsArr[projectIndex]?.screenshot_url,
        githubRepo: projectsArr[projectIndex]?.github_repo_url,
        deployment: projectsArr[projectIndex]?.deployment_url,
      });
    }
  }, [projectsArr, projectIndex]);

  let clickAudio = new Audio("/click-47609.mp3");

	useEffect(()=>{
		console.log(" Loved the theme from Cory on spacehey.com,\n so I wanted to borrow some of the code he used \n check out his profile: https://spacehey.com/cory")
	},[])

  return (
    <>
      <Helmet>
        <title>Indra Ansari&apos;s Portfolio</title>
        <meta
          name="description"
          content="It's a little summary about me + links. Let's work together on a project!"
        />
        <meta
          property="og:image"
          content="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b6acb8586b9f46ec293ebbcab4b23881.jpg"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <main>
        {/* PROFILE */}
        <div id="profile__container">
          {" "}
          <h1 className="name typewriter" id="name">
            Indra Ansari
          </h1>
          <section id="profile" className="profile">
            <img src={pfp} className="pfp" id="pfp" alt="" />
            <div className="profile-details">
              <p>&quot;Full-stack Web-Developer&quot;</p>
              <p>
                <FontAwesomeIcon
                  icon={faUser}
                  className="flash"
                  id="online-user"
                />{" "}
                Online!
              </p>
            </div>
          </section>
          <section className="flex-col">
            <p id="mood">Mood: Excited!</p>
            <p id="link-blog">
              View My:
              <a href="#" target="_blank">
                {" "}
                Blog (WIP) <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                />{" "}
              </a>{" "}
              |{" "}
              <a
                href="https://www.instagram.com/eternl_sunshine/"
                target="_blank"
              >
                Instagram <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </p>
          </section>
        </div>
        <section className="block" id="blurbs">
          <div className="block-header">
            <h4>Blurbs</h4>
          </div>
          <div className="block-content">
            <p>Hi! I am a full-stack web-developer based in Singapore.</p>

            <p>Let&apos;s work together!</p>

            <p>
              I love surfing the web. I love building fun little sites and
              projects
            </p>
          </div>
        </section>
        {/* PROJECTS */}
        <section className="block" id="projects">
          <div className="block-header">
            <h4>Projects</h4>
          </div>
          <div className="block-content">
            {" "}
            <img
              className="carousel-image"
              src={currentProject.imgUrl}
              alt={`image of ${currentProject.title}`}
              loading="lazy"
            />
            <article className="carousel__content">
              <h3 id="project-title">{currentProject.title}</h3>
              <p id="project-description">{currentProject.description}</p>
              <div className="carousel__content-linknav">
                <div className="carousel-link">
                  <a
                    id="github-repo-link"
                    href={currentProject.githubRepo}
                    target="_blank"
                  >
                    <p>
                      Github Repo{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
                    </p>
                  </a>
                  <a
                    id="deployment-link"
                    href={currentProject.deployment}
                    target="_blank"
                  >
                    <p>
                      Deployment{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </p>
                  </a>
                </div>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="carousel-arrow"
                  onClick={() => {
                    if (projectIndex == 0) {
                      setProjectIndex(projectsArr.length - 1);
                    } else {
                      setProjectIndex((prev) => prev - 1);
                    }
                    clickAudio.volume = 0.05;
                    clickAudio.play();
                  }}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="carousel-arrow"
                  onClick={() => {
                    if (projectIndex + 1 >= projectsArr.length) {
                      setProjectIndex(0);
                    } else {
                      setProjectIndex((prev) => prev + 1);
                    }
                    clickAudio.volume = 0.05;
                    clickAudio.play();
                  }}
                />
              </div>
            </article>
          </div>
          <img
            src="/hacking-lucy.gif"
            className="hacking-lucy"
            alt="gif of lucy hacking"
          />
          <small>yea I&apos;m a fan of Cyberpunk 2077 and Edgerunners...</small>
        </section>

        <div className="right">
          <section className="block" id="contact">
            <div className="block-header">
              <h4>Contact</h4>
            </div>
            <div className="block-content two-x-two-grid">
              <a
                href="https://www.linkedin.com/in/indra-ansari-70486719b/"
                target="_blank"
              >
                <p>
                  LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </p>
              </a>
              <div>
                <a href=" https://t.me/chxshire22" target="_blank">
                  <p>
                    Telegram <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </p>
                </a>
              </div>
              <a href="https://github.com/Chxshire22" target="_blank">
                <p>
                  Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </p>
              </a>
              <a href="mailto:akuindra22@gmail.com?subject=Hello, I Would Like To Connect&body=Hi, I am [insert name] and would like to contact you on possibly working together">
                <p>Gmail</p>
              </a>
            </div>
          </section>
          <section className="block" id="url">
            <div className="block-header">
              <h4>Copy This Portfolio Url</h4>
            </div>
            <div className="block-content">
              <p
                id="copy-url"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://indransari.netlify.app/"
                  );
                  clickAudio.volume = 0.05;
                  clickAudio.play();
                }}
              >
                https://indransari.netlify.app/{" "}
                <FontAwesomeIcon icon={faCopy} />
              </p>
            </div>
          </section>
          <form
            id="contact-form"
            method="post"
            name="contact"
            className="block"
          >
            <div className="block-header">
              <h4>or just leave a message:</h4>
            </div>
            <section className="block-content">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="email-input"> Your email: </label>
              <input
                id="email-input"
                type="email"
                required
                placeholder="mail@gmail.com"
                name="email-input"
              />
              <label htmlFor="contact-input">Your message</label>
              <textarea
                name="contact-input"
                required
                id="contact-input"
                cols="30"
                rows="10"
                placeholder="Hi, I was wondering if you can help me build a [insert site]"
              ></textarea>
            </section>
            <button type="submit" id="submit-btn">
              submit
            </button>
            <img src="https://i.imgur.com/j85uDmZ.png" alt="" />
          </form>
        </div>
      </main>
      <footer>
        <h4>here are some of my favourite sites:</h4>
        <ul>
          <li>
            <a
              href="https://humanityisnotbeautiful.neocities.org"
              target="_blank"
            >
              <img
                src="https://files.catbox.moe/vltthb.png"
                alt="Velvet Blue"
              />
            </a>
          </li>
          <li>
            <a href="https://cyber-rot.neocities.org/" target="_blank">
              <img
                src="https://66.media.tumblr.com/b7d33d0507f67bb8506756cb85831ef0/178953e1b919a631-f1/s100x200/3a1b1d45a9b6e3f99acc62ca5f4cb1f708a816ce.gif"
                alt="Cyber-rot link button"
              />
            </a>
          </li>
          <li>
            <a href="https://lintnaya.com/" target="_blank">
              <img
                src="https://lintnaya.com/_assets/button.png"
                title="I want to be a tomato"
                alt="Lintaya link button "
              />
            </a>
          </li>
          <li>
            <a href="https://dimden.dev/" target="_blank">
              <img
                src="https://dimden.dev/services/images/88x31.gif"
                alt="link to dimden"
              />
            </a>
          </li>
          <li>
            <a href="https://ghostmoor.gay/" target="_blank">
              <img
                src="https://ghostmoor.neocities.org/background%20images/affiliate%20button%20animation.gif"
                alt="link to ghostmoor"
              />
            </a>
          </li>
          <li>
            <a href="https://neocities.org/" target="_blank">
              <img src="https://metaspace.neocities.org/Images/neocities.gif" />
            </a>
          </li>
          <li>
            <a href="https://starrs.neocities.org/" target="_blank">
              <img
                src="https://starrs.neocities.org/graphics/webgoodies/buttons/users/tiny_space.gif"
                alt="link to tiny space"
              />
            </a>
          </li>
          <li>
            <a href="https://metaspace.neocities.org/" target="_blank">
              <img
                src="https://metaspace.neocities.org/Images/MButton.gif"
                alt="link to metaspace"
              />
            </a>
          </li>
          <li>
            <a href="https://scarecat.neocities.org/" target="_blank">
              <img
                alt="scarecat"
                src="https://scarecat.neocities.org/scarecat.gif"
              />
            </a>
          </li>
          <li>
            <a href="https://april.lexiqqq.com/" target="_blank">
              <img
                src="https://april.lexiqqq.com/images/button.gif"
                alt="link to april"
              />
            </a>
          </li>
          <li>
            <a href="https://vagab0nd.neocities.org/">
              <img
                src="https://scarecat.neocities.org/assets/buttons/vagab0nd.gif"
                alt="vagab0nd"
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
