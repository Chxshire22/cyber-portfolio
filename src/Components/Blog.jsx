import { useState } from "react";
import ChangeColor from "./UI/ChangeColor";
import { Link } from "react-router-dom";

export default function Blog(props) {
  let { siteColor, setSiteColor } = props;

  function toggleContentVisibility(event) {
    const button = event.target;
    const blockHeader = button.closest(".block-header");
    const block = blockHeader.closest(".block");
    const blockContent = block.querySelector(".block-content");

    if (blockContent) {
      blockContent.classList.toggle("hidden");
      blockContent.classList.toggle("show");
    }

    if (blockContent && blockContent.classList.contains("hidden")) {
      button.innerHTML = "[+]";
    } else if (blockContent && blockContent.classList.contains("show")) {
      button.innerHTML = "[x]";
    }
  }

  let clickAudio = new Audio("/click-47609.mp3");

  return (
    <>
      <header>
        <ChangeColor siteColor={siteColor} setSiteColor={setSiteColor} />
        <div className="header-flex">
          <Link
            className="link-to-home inner-link"
            to="/"
            onClick={() => {
              clickAudio.volume = 0.05;
              clickAudio.play();
            }}
          >
            Home
          </Link>
          <h1 className="blog__header">hey, welcome to my tech blog</h1>
        </div>
      </header>
      <main className="blog">
        <figure>
          <img src="/cybercity.gif" alt="cybercity" id="cybercity" />
          <figcaption>
            my favorite way to view this site is in [purple]
          </figcaption>
        </figure>
        <ul>
          <li className="block" title='git commit -m "initial commit"'>
            <div className="block-header">
              <h4>git commit -m &quot;initial commit&quot;</h4>
              <div>
                <button
                  data-color={siteColor}
                  onClick={(e) => {
                    toggleContentVisibility(e);
                    clickAudio.volume = 0.05;
                    clickAudio.play();
                  }}
                >
                  [+]
                </button>
              </div>
            </div>
            <div className="block-content hidden">
              <p className="date">17/04/2024</p>
              <p className="blog-post__content">
                this is the first post of this blog. <br />
                honestly, everything on this blog page is hardcoded at the
                moment cos I want to make it faster. <br />
                <br />
                also it&apos;s easier to format things. <br />
                <br />
                i do have a firebase backend service running, and i can easily
                store my posts there and dynamically render things out. <br />
                <br />
                but it&apos;s less fun i guess, and less fast. <br />
                <br />
                here&apos;s what i&apos;ll share on this blog:
                <br />
                <br />
                <ul>
                  <li> - things ive built</li>
                  <li> - events ive been to </li>
                  <li> - future web dev plans </li>
                  <li> - current things im working on </li>
                </ul>
                <br />
                song of the day:
                <br />
                <iframe
                  loading="lazy"
                  src="https://www.youtube.com/embed/EgdMweSmfUU?si=GrPZRvdiVaPmhPaK?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </p>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}
