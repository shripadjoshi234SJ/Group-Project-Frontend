import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaRedo, FaCheck } from "react-icons/fa";

const MeterCamera = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
        });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Camera Error:", error);
      alert("Unable to access camera.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    setCapturedImage(image);

    if (onCapture) {
      onCapture(image);
    }
  };

  const retake = () => {
    setCapturedImage(null);
  };

  return (
    <div className="meter-camera">

      <h3>Scan Electricity Meter</h3>

      {!capturedImage ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="camera-preview"
          />

          <button
            className="capture-btn"
            onClick={captureImage}
          >
            <FaCamera />
            Capture
          </button>
        </>
      ) : (
        <>
          <img
            src={capturedImage}
            alt="Captured Meter"
            className="captured-image"
          />

          <div className="camera-actions">

            <button
              className="retake-btn"
              onClick={retake}
            >
              <FaRedo />
              Retake
            </button>

            <button className="use-btn">
              <FaCheck />
              Use Image
            </button>

          </div>
        </>
      )}

      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
      />

    </div>
  );
};

export default MeterCamera;