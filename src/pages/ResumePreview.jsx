import React, { useRef } from "react";
import { useData } from "../FormDataContext";
import  html2pdf  from "html2pdf.js";



function ResumePreview() {
  const { formData } = useData();
  const resumeRef = useRef();
  const element = resumeRef.current;

  // Get the latest data entry
  const data = formData?.[formData.length - 1];

 const handleDownload = () => {
  const element = resumeRef.current;
  if (!element || !data) return;

  const options = {
    margin: 0.3,
    filename: `${data.name?.replace(/\s+/g, "_") || "resume"}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(element).save()
    .catch((err) => console.error("PDF generation error:", err)); // catch errors
};

  if (!data) {
    return (
      <div className="text-center text-lg text-red-500 mt-10">
        No resume data found. Please fill out the form first.
      </div>
    );
  }

  return (
    <div className="p-6">
      <button
        onClick={handleDownload}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mb-4"
      >
        Download PDF
      </button>

      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md  font-sans"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold uppercase">{data.name}</h1>
          <p className="text-lg ">{data.profesion}</p>
          <div className="flex justify-center gap-4 mt-2 text-sm flex-wrap">
            <a href={data.github} target="_blank" className="underline">GitHub</a>
            <a href={data.portfolio} target="_blank" className="underline">Portfolio</a>
            <span>{data.number}</span>
          </div>
        </div>

        {/* About Me */}
        <section className="mb-6">
          <h2 className="text-xl font-bold  mb-1">ABOUT ME</h2>
          <p>{data.about}</p>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-bold  mb-2">PROJECTS</h2>
          {[1, 2, 3].map((i) => (
            data[`project${i}`] && (
              <div key={i} className="mb-3">
                <p className="font-medium">
                  Project {i}: {data[`project${i}`]}
                  {data[`projecturl${i}`] && (
                    <a
                      href={data[`projecturl${i}`]}
                      target="_blank"
                      className=" underline text-sm ml-2"
                    >
                      Live
                    </a>
                  )}
                </p>
              </div>
            )
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold  mb-2">SKILLS</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {data.skills?.split(",").map((skill, index) => (
              <li key={index} className="list-disc list-inside">
                {skill.trim()}
              </li>
            ))}
          </ul>
        </section>

        {/* Bootcamp */}
        {data.bootcamp && (
          <section className="mb-6">
            <h2 className="text-xl font-bold  mb-1">BOOTCAMP</h2>
            <p>Completed Full Stack Bootcamp at <strong>{data.bootcamp}</strong></p>
          </section>
        )}

        {/* Qualification */}
        {data.qualification && (
          <section className="mb-6">
            <h2 className="text-xl font-bold  mb-1">QUALIFICATION</h2>
            <p>{data.qualification}</p>
          </section>
        )}

        {/* Achievement (Optional) */}
        {data.achievement && (
          <section className="mb-6">
            <h2 className="text-xl font-bold  mb-1">ACHIEVEMENT</h2>
            <p>{data.achievement}</p>
          </section>
        )}
      </div>
    </div>
  );
}

export default ResumePreview;
