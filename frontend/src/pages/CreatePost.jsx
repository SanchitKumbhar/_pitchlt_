import React, { useCallback, useRef, useState } from "react";
import { Upload } from "lucide-react";
import Navbar2 from "../components/Navbar2";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [pitch, setPitch] = useState("");
  const fileInputRef = useRef(null);

  const handleFiles = useCallback((selectedFiles) => {
    const incoming = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...incoming]);
  }, []);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const onFileInputChange = (e) => {
    if (e.target.files && e.target.files.length) {
      handleFiles(e.target.files);
    }
    e.target.value = null;
  };

  const openFileDialog = () => fileInputRef.current?.click();

  const removeFile = (index) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setFiles([]);
    setPitch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting", { title, description, pitch, files });
    alert(`Submitting ${files.length} file(s). Check console for details.`);
  };

  return (
    <div className="bg-gray-50">
        <Navbar2 />
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 space-y-8 ">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800">
        Create New Post
      </h1>

      {/* Section 1 - Post Details */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Post Details</h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Post Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter post title"
            className="w-full border border-gray-300 rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Post Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Enter description"
            className="w-full border border-gray-300 rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none"
          />
        </div>
      </div>

      {/* Section 2 - Attachments */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center text-gray-700">
          Attachments
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Add files to support your pitch (e.g. pitch deck, mockups, data)
        </p>

        {/* Upload Box */}
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center space-y-3 hover:bg-gray-50 cursor-pointer transition ${
            dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
          }`}
          onClick={openFileDialog}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={onFileInputChange}
            className="hidden"
          />

          <Upload className="mx-auto w-10 h-10 text-gray-500" />
          <p className="text-gray-600">
            Drag and drop files here or{" "}
            <span className="text-blue-600 font-medium">click to browse</span>
          </p>

          {files.length > 0 && (
            <div className="mt-4 text-left max-h-40 overflow-auto">
              <ul className="space-y-2">
                {files.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded-md border"
                  >
                    <div className="text-sm">
                      <div className="font-medium">{f.name}</div>
                      <div className="text-xs text-gray-500">
                        {(f.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(ev) => {
                        ev.stopPropagation();
                        removeFile(idx);
                      }}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Select Pitch
          </label>
          <input
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            type="text"
            placeholder="Enter pitch name"
            className="w-full border border-gray-300 rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none"
          />
        </div>

        <div className="flex justify-end space-x-4 py-5">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit Post
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default CreatePost;
