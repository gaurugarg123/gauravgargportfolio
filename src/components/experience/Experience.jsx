import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
             <div>
             <h5>HTML</h5>
              <small className="text-light">Experienced</small>
             </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>CSS</h5>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>Javascript</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>Bootstrap</h5>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>React Js</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* FRONT-END END */}
        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>MongoDb</h5>
              <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>Node Js</h5>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>C</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsFillPatchCheckFill className='exp__details-icon' />
              <div>
              <h5>Python</h5>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Experience;
