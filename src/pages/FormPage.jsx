import React from "react";
import { useForm } from "react-hook-form";
import { useData } from "../FormDataContext";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const navigate = useNavigate()
  const { formData, setFormData } = useData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const SubmitHandler = (data) => {
    setFormData((prev) => [...prev, data]);
  };
  
 
  localStorage.setItem("resumeData", JSON.stringify(formData));
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <button onClick={()=>navigate("/preview")} className="bg-green-500 px-3 py-1 font-thin rounded-md ">preview</button>
      <h2 className="text-2xl font-semibold mb-6 text-center">Resume Form</h2>
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="w-full p-2 border rounded-md"
          />
          {errors.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        {/* Profession */}
        <div>
          <label className="block font-medium mb-1">Profession</label>
          <input
            type="text"
            {...register("profesion", { required: "Profession is required" })}
            placeholder="Profession"
            className="w-full p-2 border rounded-md"
          />
          {errors.profesion && (
            <small className="text-red-500">{errors.profesion.message}</small>
          )}
        </div>

        {/* Github */}
        <div>
          <label className="block font-medium mb-1">GitHub URL</label>
          <input
            type="url"
            {...register("github", { required: "GitHub URL is required" })}
            placeholder="https://github.com/username"
            className="w-full p-2 border rounded-md"
          />
          {errors.github && (
            <small className="text-red-500">{errors.github.message}</small>
          )}
        </div>

        {/* Portfolio */}
        <div>
          <label className="block font-medium mb-1">Portfolio URL</label>
          <input
            type="url"
            {...register("portfolio", { required: "Portfolio is required" })}
            placeholder="https://yourportfolio.com"
            className="w-full p-2 border rounded-md"
          />
          {errors.portfolio && (
            <small className="text-red-500">{errors.portfolio.message}</small>
          )}
        </div>

        {/* Number */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="number"
            {...register("number", {
              required: "Number is required",
              maxLength: { value: 10, message: "Enter 10-digit number" },
              minLength: { value: 10, message: "Enter 10-digit number" },
            })}
            placeholder="10-digit number"
            className="w-full p-2 border rounded-md"
          />
          {errors.number && (
            <small className="text-red-500">{errors.number.message}</small>
          )}
        </div>

        {/* About Me */}
        <div>
          <label className="block font-medium mb-1">About Me</label>
          <textarea
            {...register("about", { required: "This is required" })}
            placeholder="Write about yourself..."
            className="w-full p-2 border rounded-md h-24"
          />
          {errors.about && (
            <small className="text-red-500">{errors.about.message}</small>
          )}
        </div>

        {/* Project 1 */}
        <div>
          <label className="block font-medium mb-1">
            Project 1 Description
          </label>
          <textarea
            {...register("project1", {
              required: "Project 1 description is required",
            })}
            placeholder="Describe your first project"
            className="w-full p-2 border rounded-md h-24"
          />
          {errors.project1 && (
            <small className="text-red-500">{errors.project1.message}</small>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Project 1 URL</label>
          <input
            type="url"
            {...register("projecturl1", {
              required: "Project 1 URL is required",
              minLength: {
                value: 10,
                message: "Provide a valid URL",
              },
            })}
            placeholder="https://project1.com"
            className="w-full p-2 border rounded-md"
          />
          {errors.projecturl1 && (
            <small className="text-red-500">{errors.projecturl1.message}</small>
          )}
        </div>

        {/* Project 2 */}
        <div>
          <label className="block font-medium mb-1">
            Project 2 Description
          </label>
          <textarea
            {...register("project2", {
              required: "Project 2 description is required",
            })}
            placeholder="Describe your second project"
            className="w-full p-2 border rounded-md h-24"
          />
          {errors.project2 && (
            <small className="text-red-500">{errors.project2.message}</small>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Project 2 URL</label>
          <input
            type="url"
            {...register("projecturl2", {
              required: "Project 2 URL is required",
              minLength: {
                value: 10,
                message: "Provide a valid URL",
              },
            })}
            placeholder="https://project2.com"
            className="w-full p-2 border rounded-md"
          />
          {errors.projecturl2 && (
            <small className="text-red-500">{errors.projecturl2.message}</small>
          )}
        </div>

        {/* Project 3 */}
        <div>
          <label className="block font-medium mb-1">
            Project 3 Description: (optional)
          </label>
          <textarea
            {...register("project3")}
            placeholder="Describe your third project (optional)"
            className="w-full p-2 border rounded-md h-24"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Project 3 URL</label>
          <input
            type="url"
            {...register("projecturl3")}
            placeholder="https://project3.com (optional)"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium mb-1">
            Skills (comma separated)
          </label>
          <textarea
            {...register("skills", { required: "This is required" })}
            placeholder="JavaScript, React, Node.js..."
            className="w-full p-2 border rounded-md h-20"
          />
          {errors.skills && (
            <small className="text-red-500">{errors.skills.message}</small>
          )}
        </div>

        {/* Qualification */}
        <div>
          <label className="block font-medium mb-1">Qualification</label>
          <textarea
            {...register("qualification")}
            placeholder="Your qualifications"
            className="w-full p-2 border rounded-md h-20"
          />
          {errors.qualification && (
            <small className="text-red-500">
              {errors.qualification.message}
            </small>
          )}
        </div>

        {/* Bootcamp */}
        <div>
          <label className="block font-medium mb-1">Bootcamp</label>
          <input
            type="text"
            {...register("bootcamp", { required: "This is required" })}
            placeholder="Bootcamp name"
            className="w-full p-2 border rounded-md"
          />
          {errors.bootcamp && (
            <small className="text-red-500">{errors.bootcamp.message}</small>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
