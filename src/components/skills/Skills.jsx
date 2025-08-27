import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const coreCompetences = [{
  title: "Javascript - HTML - CSS",
  description: "",
},
  {
    title: "React (Web/Mobile)",
    description: "Redux / RTK Query",
  },
  {
    title: "RESTfulAPIs",
    description: "",
  },
  {
    title: "Material UI - Tailwind CSS",
    description: "",
  },
  {
    title: "Playwright - Detox",
    description: "End-to-end testing (Mobile/Web)",
  },
  {
    title: "Git",
    description: "",
  },
];

const familiarWith = [{
  title: "Typescript",
  description: "",
},
  {
    title: "Jest",
    description: "",
  },
  {
    title: "Vitest",
    description: "",
  },
  {
    title: "Firebase",
    description: "Realtime Database, Firestore and Authentication",
  },
  {
    title: "S3 - AWS Lambda",
    description: "",
  },
  {
    title: "Node.js",
    description: "",
  },
];

const languages = [{
  title: "Portuguese",
  description: "Native",
},
  {
    title: "English",
    description: "Fluent",
  },
  {
    title: "French",
    description: "Conversational",
  },
];

const SkillCard = ({ data, showBackground }) => {
  return (

    <div  style={{

      flexGrow: 1,

      justifyContent: "center",
      alignItems: "center",
      display: "flex", flexDirection: "column", gap: "20px",
      // height: 300,
    }}>
      <div style={{border: "2px solid #8251a8a0"}} className={`
    flex items-center justify-center
     rounded-[30px]
    px-[10px] py-[40px]
    ${showBackground ? "bg-[#8251a8a0]" : ""}
    md:px-2 md:py-4   
    lg:px-8 lg:py-10
    w-full lg:w-[700px] 
  `}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {data?.map((item) => {
            return (
              <div key={item?.id} style={{ display: "flex", gap: "20px", alignItems: "center" }}>

                <BsPatchCheckFill className="icons"/>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{item?.title}</span>
                  {item?.description &&
                    <span style={{ color: "#FFFFFF88" }}>{item?.description}</span>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

};


function Skills() {
  return (
    <section className=" flex flex-col items-center" id="skills">
        <h1 >{"COMPETENCES"}</h1>
      <div   className={"flex flex-col pt-10 gap-9 lg:flex-row "} style={{
        width: "100%",
        // backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",

      }}>
        <div className={"flex flex-col gap-6 lg:w-[700px] w-full"}>
          <h2 style={{ textAlign: "center" }}>{"PROFECIENT"}</h2>
          <SkillCard showBackground data={coreCompetences}/>
        </div>
        <div className={"flex flex-col gap-6 lg:w-[700px] w-full"}>
          <h2 style={{ textAlign: "center" }}>{"FAMILIA WITH"}</h2>
          <SkillCard data={familiarWith}/>
        </div>
      </div>

      <div   className={"flex flex-col pt-10 gap-9 lg:w-[700px] w-full"} style={{
      }}>
      <div className={"flex flex-col gap-6 pt-16  lg:w-[700px] w-full "}>
        <h2 style={{ textAlign: "center" }}>{"LANGUAGES"}</h2>
        <SkillCard data={languages}/>
      </div>
      </div>


    </section>
  );
}

export default Skills;
