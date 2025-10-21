import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const TeamDetails = ({ selectedRoles, toggleRole }) => {
  const roles = [
    "Backend Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Marketing Specialist",
    "Business Analyst",
    "Product Manager",
    "Data Scientist",
    "Sales Executive",
    "Game Developer",
    "DevOps Engineer",
    "Animator",
    "Social Media Manager",
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex-1 h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">Team Details</h2>
      <div className="space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Looking for team members?</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>

        <div>
          <p className="mb-4 text-gray-600">Team Roles Required</p>
          <div className="grid grid-cols-2 gap-2 text-xs mb-6">
            {roles.map((role) => {
              const isSelected = selectedRoles.includes(role);
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => toggleRole(role)}
                  className={`border px-3 py-2 rounded-md transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-blue-500 text-white border-blue-500"
                      : "text-blue-500 border-gray-300"
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

const PitchModalForm = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [pitchDeck, setPitchDeck] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pitchTitle", "Example Title");
    formData.append("tagline", "Example Tagline");
    formData.append("fullDescription", "Example full description");
    formData.append("rolesRequired", selectedRoles.join(","));
    if (thumbnail) formData.append("image", thumbnail);
    if (pitchDeck) formData.append("pitchDeck", pitchDeck);

    try {
      
      const token = localStorage.getItem("token"); // JWT from login

    const res = await fetch("http://127.0.0.1:3000/api/create-pitch", {
      method: "POST",
      body: formData,
      credentials: "include"   // ✅ cookie is sent automatically
    });

//  d4bcf8e130bc02b46769266ea4e15eaa14cb24f9

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) setThumbnail(file);
  };

  const handleThumbnailRemove = () => {
    setThumbnail(null);
  };

  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const [category, setCategory] = useState("");

  const suggestedCategories = ["AI", "EdTech", "Green Energy"];

  const handleClick = (cat) => {
    setCategory(cat);
  };

  const [tags, setTags] = useState("");

  const suggestedTags = [
    "Innovation",
    "AI",
    "Sustainability",
    "Startup",
    "Pitch",
    "Technology",
    "Innovation Challenge",
    "GreenTech",
    "ML",
    "UX",
    "Product Design",
    "Data Science",
  ];

  const handleTagClick = (tag) => {
    const tagArray = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    // Add tag only if it's not already in the list
    if (!tagArray.includes(tag)) {
      tagArray.push(tag);
      setTags(tagArray.join(", "));
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar2 />
      <div className="p-6 md:p-10 lg:px-24 w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Create New Pitch
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 mb-6">
          {/* Pitch Details */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex-1 h-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Pitch Details
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-gray-600 mb-1">Pitch Title</label>
                <input
                  type="text"
                  placeholder="Enter pitch title"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Tagline / Short Description
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Full Description
                </label>
                <textarea
                  rows="6"
                  placeholder="Enter detailed description..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Team Details */}
          <TeamDetails selectedRoles={selectedRoles} toggleRole={toggleRole} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Media */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Media & Attachments
            </h2>
            <div className="space-y-5 text-sm">
              <div>
                <label className="block text-gray-600 mb-1">
                  Image Upload (Thumbnail / Poster)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    onChange={handleThumbnailUpload}
                  />
                  {thumbnail && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-xs">
                        {thumbnail.name} ({(thumbnail.size / 1024).toFixed(1)}{" "}
                        KB)
                      </span>
                      <button
                        onClick={handleThumbnailRemove}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Pitch Deck (PDF/Slides - Optional)
                </label>
                <input
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Video Link (YouTube/Vimeo - Optional)
                </label>
                <input
                  type="url"
                  placeholder="Enter video link"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>
          </section>

          {/* Categorization */}

          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Categorization & Privacy
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-gray-600 mb-1">
                  Pitch Category / Domain
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI, Healthcare, FinTech"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-1"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <div className="flex flex-wrap gap-2 mt-2 text-xs text-blue-500 mb-5">
                  {suggestedCategories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-gray-100 rounded cursor-pointer"
                      onClick={() => handleClick(cat)}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Pitch Type / Privacy</p>
                <div className="flex flex-col gap-2">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="privacy"
                      className="accent-blue-500"
                      defaultChecked
                    />
                    Public (visible to all users)
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="privacy"
                      className="accent-blue-500"
                    />
                    Private (only mentors/invitees can view)
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Tags */}

          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Tags / Keywords
            </h2>
            <label className="block text-gray-600 mb-1 text-sm">
              Add Tags/Keywords
            </label>
            <input
              type="text"
              placeholder="Enter keywords..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-1"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-blue-500">
              {suggestedTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 rounded cursor-pointer"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer text-sm sm:text-base">
            Save Draft
          </button>
          <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 cursor-pointer text-sm sm:text-base">
            Preview Pitch
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer text-sm sm:text-base"
            onClick={handleSubmit}
          >
            Submit Pitch
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PitchModalForm;
