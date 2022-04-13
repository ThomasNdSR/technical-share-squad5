import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiCamera } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import {InputUpload} from "../../components/Profile/InputUpload"
import { UserExperienceCard } from "../../components/Profile/UserExperienceCard";
import { SchedulingCard } from "../../components/Profile/SchedulingCard";
import { SkillsEdit } from "../../components/Profile/SkillsEdit";
import "./styles.css";

export const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skillsEdit, setSkillsEdit] = useState(false);
  const [projectEdit, setProjectEdit] = useState(false);
  const [bioEdit, setBioEdit] = useState(false);
  const [menuActive, setMenu] = useState("perfil");
  useEffect(() => {
    getUserProfile();
    getAllSkills();
  }, []);;
  const getAllSkills = async () => {
    await api
      .get("/skill")
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUserProfile = async () => {
    await api
      .get("/user/624f249ed07fa608ca7e8a6b")
      .then((res) => {
        setUserProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header
        page="private"
        name={userProfile.name}
        image={
          userProfile.img === undefined
            ? "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
            : `http://localhost:8000/img/${userProfile.img.path.slice(11)}`
        }
      />
      <main className="flexbox__container">
        <div className="businessCard__cover" />
        <section className="businessCard page">
          <nav className="businessCard__menu">
            <a href="dashboard">
              <AiOutlineLeft size={24} color="var(--neutral-02)" />
            </a>
            <a
              href="#showProfie"
              className={`businessCard__menu--item ${
                menuActive === "perfil" ? "active" : ""
              }`}
              onClick={() => {
                setMenu("perfil");
              }}
            >
              Perfil
            </a>
            <a
              href="#showScheduling"
              className={`businessCard__menu--item ${
                menuActive === "agenda" ? "active" : ""
              }`}
              onClick={() => {
                setMenu("agenda");
              }}
            >
              Agenda
            </a>
          </nav>
          <article className="businessCard__descrition">
            <div className="businessCard__descrition--data">
              <h3>{userProfile.name}</h3>
              <p>{userProfile.role}</p>
            </div>

            <figure className="businessCard__photo">
              <button>
                <FiCamera size={24} color="var(--primary-01)" />
              </button>
              <img
                src={
                  userProfile.img === undefined
                    ? "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
                    : `http://localhost:8000/img/${userProfile.img.path.slice(
                        11
                      )}`
                }
                alt={`foto do usuario ${userProfile.name}`}
              />
            </figure>
          </article>
        </section>
        {menuActive === "perfil" ? (
          <section
            id="showProfie"
            className="businessCard__experienceCard page"
          >
            <UserExperienceCard title="Bio" clickEdit={()=>{
              setBioEdit(!bioEdit)
            }}>
              <p className="businessCard__load">
                Loading <span>.</span>
                <span>.</span>
                <span>.</span>
              </p>
              {bioEdit ? (
                <InputUpload name="Bio" />
              ) : (
                ""
              )}
            </UserExperienceCard>
            <UserExperienceCard
              title="Skills"
              clickEdit={() => {
                setSkillsEdit(!skillsEdit);
              }}
            >
              {skillsEdit ? (
                <SkillsEdit skills={skills} id={userProfile._id} />
              ) : (
                ""
              )}
              {userProfile.skill ? (
                userProfile.skill.map((data, i) => (
                  <p className="skill_list--item" key={i}>
                    {data.name}
                  </p>
                ))
              ) : (
                <p className="businessCard__load">
                  Loading <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </p>
              )}
            </UserExperienceCard>
            <UserExperienceCard
              title="Projetos"
              clickEdit={() => {
                setProjectEdit(!projectEdit);
              }}
            >
              {userProfile.project ? (
                userProfile.project.map((data, i) => (
                  <p className="skill_list--item" key={i}>
                    {data}
                  </p>
                ))
              ) : (
                <p className="businessCard__load">
                  Loading <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </p>
              )}
              {projectEdit ? (
                <InputUpload name="projetos" />
              ) : (
                ""
              )}
            </UserExperienceCard>
            <section className="businessCard__menu--item">
              <article>
                <h5>Redes Sociais</h5>
                <div>
                  <FiGithub size={30} color="var(--primary-02)" />
                  <FiLinkedin size={30} color="var(--primary-02)" />
                </div>
              </article>
              <article>
                <h5>Acessibilidade</h5>
                <div>
                  <p className="skill_list--item">Deficientes auditivos</p>
                </div>
              </article>
            </section>
            <section></section>
          </section>
        ) : (
          ""
        )}
        {menuActive === "agenda" ? (
          <section id="showScheduling">
            <article>
              <SchedulingCard available={userProfile}></SchedulingCard>
            </article>
          </section>
        ) : (
          ""
        )}
      </main>
    </>
  );
};
