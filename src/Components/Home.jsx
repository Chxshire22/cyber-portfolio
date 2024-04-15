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

  return (
    <>
      <Helmet>
        <title>Indra Ansari's Portfolio</title>
        <meta
          name="description"
          content="It's a little summary about me + links. Let's work together on a project!"
        />
        <meta property="og:image" content="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b6acb8586b9f46ec293ebbcab4b23881.jpg"/>
				<link rel="canonical" href="/" />
      </Helmet>
      <main>
        {/* PROFILE */}
        <div id="profile__container">
          {" "}
          <h1 className="name" id="name">
            Indra Ansari
          </h1>
          <section id="profile" className="profile">
            <img src={pfp} className="pfp" id="pfp" alt="" />
            <div className="profile-details">
              <p>"Full-stack Web-Developer"</p>
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
              <a href="https://www.youtube.com/@chxshire22" target="_blank">
                {" "}
                YouTube <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
              </a>{" "}
              |
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

            <p>Let's work together!</p>

            <p>
              My toolkit includes:
              <br />
              React, Express, NodeJs, NextJs <br />
              However, I will always select the best tool for the job at hand,
              even if it means learning a new language or framework.
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
                https://indransari.netlify.app/
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
                autoFocus
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
          </form>
        </div>
      </main>
    </>
  );
}
