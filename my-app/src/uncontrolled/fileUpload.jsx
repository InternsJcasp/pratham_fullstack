import { useRef } from "react";

function ProfileImageUploader() {
  const fileRef = useRef(null);
  const handleFileUploader = () => {
    const file = fileRef.current.files[0];
    if (file) {
      console.log("Selected File", file);
    }
  };
  return (
    <>
      <div>
        <input type="file" ref={fileRef} />
        <button onClick={handleFileUploader}>Submit</button>
      </div>
    </>
  );
}

export default ProfileImageUploader;
