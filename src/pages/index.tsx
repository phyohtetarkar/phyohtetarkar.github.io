import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Facebook,
  GitHub,
  Linkedin,
  Mail,
  MapPin,
  Twitter
} from "react-feather";
import GitHubCalendar from "react-github-calendar";
import { certificates, experiences, projects, skills } from "../lib/data";

const _about_me = `
I'm a full-stack developer. 
I'm specializing in developing high quality Back-end services and Native/Hybrid Mobile applications. 
Also, I'm able to catch up the fast pace changes in technologies and enjoy on researching new technologies.
`;

const Home: NextPage = () => {
  return (
    <div className="bg-dark">
      <Head>
        <title>{process.env.NEXT_PUBLIC_USER_NAME}</title>
        <meta name="description" content="Hi, I'm Phyo Htet Arkar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <div className="container py-4">
            <div className="hstack gap-4">
              <div onContextMenu={(e) => e.preventDefault()}>
                <Image
                  src="/images/profile.jpg"
                  alt="profile"
                  className="rounded-circle"
                  width={180}
                  height={180}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="vstack justify-content-center">
                <h2 className="fw-bold text-light">
                  {process.env.NEXT_PUBLIC_USER_NAME}
                </h2>
                <div className="mb-3 text-light" style={{ fontSize: 18 }}>
                  {process.env.NEXT_PUBLIC_HEADLINE}
                </div>
                <div className="hstack gap-2">
                  <a
                    href={process.env.NEXT_PUBLIC_TWITTER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light opacity-75 rounded-circle p-0 hstack"
                    style={{
                      width: 40,
                      height: 40
                    }}
                  >
                    <Twitter size={20} className="mx-auto" />
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light opacity-75 rounded-circle p-0 hstack"
                    style={{
                      width: 40,
                      height: 40
                    }}
                  >
                    <Linkedin size={20} className="mx-auto" />
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light opacity-75  rounded-circle p-0 hstack"
                    style={{
                      width: 40,
                      height: 40
                    }}
                  >
                    <Facebook size={20} className="mx-auto" />
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light opacity-75 rounded-circle p-0 hstack"
                    style={{
                      width: 40,
                      height: 40
                    }}
                  >
                    <GitHub size={20} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-0 border-secondary" />
        <div className="">
          <div className="container py-4">
            <div className="row g-4 mb-4 d-block d-lg-none">
              <div className="col-lg-8">
                <div className="card text-bg-dark border-secondary">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">About Me</h5>
                    <p className="mb-0 opacity-75 fw-light">{_about_me}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-dark border-secondary">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">Contact</h5>
                    <div className="vstack gap-2">
                      <div className="hstack gap-3">
                        <MapPin size={18} />
                        <span>{process.env.NEXT_PUBLIC_LOCATION}</span>
                      </div>
                      <div className="hstack gap-3">
                        <Mail size={18} />
                        <a
                          className="link-success"
                          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                        >
                          {process.env.NEXT_PUBLIC_EMAIL}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="card text-bg-dark border-secondary mb-4 d-none d-lg-block">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">About Me</h5>
                    <p className="mb-0 opacity-75 fw-light">{_about_me}</p>
                  </div>
                </div>

                <div className="card text-bg-dark border-secondary mb-4">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">Projects</h5>
                    <div className="vstack gap-4">
                      {projects.map((e, i) => {
                        return (
                          <div key={i}>
                            <h6>{e.title}</h6>
                            <p className="opacity-75 fw-light mb-2">
                              {e.about}
                            </p>
                            <div className="hstack">
                              {e.links.map((l, i) => {
                                return (
                                  <div key={i}>
                                    <a
                                      href={l.url}
                                      rel="noreferrer"
                                      target="_blank"
                                      className="link-success"
                                    >
                                      {l.type}
                                    </a>
                                    {i < e.links.length - 1 && (
                                      <span className="mx-1 text-light opacity-75">
                                        &amp;
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="card text-bg-dark border-secondary mb-4">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">Work Experiences</h5>
                    <div className="vstack gap-4">
                      {experiences.map((e, i) => {
                        return (
                          <div key={i}>
                            <div className="hstack mb-2 d-none d-lg-flex">
                              <span className="fw-semibold">{e.title} -</span>
                              <span className="text-muted ms-1">
                                {e.company}
                              </span>
                            </div>
                            <div className="vstack mb-2 d-flex d-lg-none">
                              <span className="fw-semibold">{e.title}</span>
                              <span className="text-muted text-light small">
                                {e.company}
                              </span>
                            </div>
                            <ul className="text-light opacity-50 mb-0">
                              {e.responsibilities.map((r, i) => {
                                return <li key={i}>{r}</li>;
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="card text-bg-dark border-secondary mb-4">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">My Github</h5>
                    <GitHubCalendar
                      username="phyohtetarkar"
                      theme={{
                        level0: "#ddd",
                        level1: "#70e000",
                        level2: "#38b000",
                        level3: "#008000",
                        level4: "#007200"
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-dark border-secondary mb-4 d-none d-lg-block">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">Contact</h5>
                    <div className="vstack gap-2">
                      <div className="hstack gap-3">
                        <MapPin size={18} />
                        <span>{process.env.NEXT_PUBLIC_LOCATION}</span>
                      </div>
                      <div className="hstack gap-3">
                        <Mail size={18} />
                        <a
                          className="link-success"
                          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                        >
                          {process.env.NEXT_PUBLIC_EMAIL}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-bg-dark border-secondary mb-4">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">Skills</h5>
                    <div className="vstack gap-3">
                      {skills.map((e, i) => {
                        return (
                          <div key={i}>
                            <h6 className="opacity-50">{e.title}</h6>
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                aria-valuenow={e.percentage}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: `${e.percentage}%`
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="card text-bg-dark border-secondary mb-4">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">Certifications</h5>

                    <div className="vstack gap-3">
                      {certificates.map((e, i) => {
                        return (
                          <div key={i} className="hstack gap-3">
                            <div
                              className="ratio ratio-1x1 flex-shrink-0"
                              style={{ width: 60, height: 60 }}
                            >
                              <Image
                                src={e.image}
                                layout="fill"
                                alt=""
                                objectFit="contain"
                                className=""
                              />
                            </div>
                            <a
                              href={e.url}
                              rel="noreferrer"
                              target="_blank"
                              className="link-light opacity-75"
                            >
                              {e.title}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="card text-bg-dark border-secondary mb-4">
                  <div className="card-body p-md-4">
                    <h5 className="fw-bold mb-3">Languages</h5>

                    <div className="mb-3">
                      <div className="hstack">
                        <span className="fw-semibold">Burmese:</span>
                        <span className="text-muted ms-1">Native</span>
                      </div>
                    </div>

                    <div className="">
                      <div className="hstack">
                        <span className="fw-semibold">English:</span>
                        <span className="text-muted ms-1">Good</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container">
        <hr className="border-secondary m-0"></hr>
        <div className="hstack justify-content-center py-4 text-light">
          <span className="small opacity-75">
            Made with ❤️ by&nbsp;
            <a
              href="https://nextjs.org/"
              rel="noreferrer"
              target="_blank"
              className="link-light"
            >
              Nextjs
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
