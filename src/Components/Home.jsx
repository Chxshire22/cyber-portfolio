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
	doc,
	setDoc,
	where,
	getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";

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
				console.log(doc.id, " => ", doc.data());
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
		console.log(projectIndex)
	}, [projectsArr, projectIndex]);

	let clickAudio = new Audio("/click-47609.mp3")

	return (
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
            React, Express, NodeJs, NextJs
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
                  clickAudio.volume = 0.2;
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
                  clickAudio.volume = 0.2;
                  clickAudio.play();
                }}
              />
            </div>
          </article>
        </div>
      </section>

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
            <p>Phone</p>
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
          <p id="copy-url" onClick={()=>{
						navigator.clipboard.writeText("https://661bb854dc2f1f544168ebc8--indransari.netlify.app/")
						clickAudio.volume = 0.2;
						clickAudio.play();
					
					}}>
            https://661bb854dc2f1f544168ebc8--indransari.netlify.app/
            <FontAwesomeIcon icon={faCopy} />
          </p>
        </div>
      </section>
    </main>
  );
}
