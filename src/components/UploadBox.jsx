import React, { useRef, useState } from "react";
import { FaUpload, FaFileImage, FaTrash } from "react-icons/fa";

const UploadBox = ({ title, onFileSelect }) => {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);

  const handleBrowse = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    if (onFileSelect) {
      onFileSelect(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    inputRef.current.value = "";

    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  return (
    <div className="upload-box">

      <h3>{title}</h3>

      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        hidden
        onChange={handleFileChange}
      />

      {!file ? (
        <button
          className="upload-btn"
          onClick={handleBrowse}
        >
          <FaUpload />
          Select File
        </button>
      ) : (
        <div className="selected-file">
          <FaFileImage size={40} />

          <p>{file.name}</p>

          <small>
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </small>

          <button
            className="remove-btn"
            onClick={removeFile}
          >
            <FaTrash />
            Remove
          </button>
        </div>
      )}

    </div>
  );
};

export default UploadBox;