// "use client";

// import ContentUploader from "@/components/ContentUploader";
// import React, { useState } from "react";

// export const ContentGet = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleImageUpload = (url: string) => {
//     setImage(url);
//   };

//   const handleError = (error: string | null) => {
//     setError(error);
//   };

//   return (
//     <div>
//       <ContentUploader onUpload={handleImageUpload} onError={handleError} />
//       {image && (
//         <div style={{ marginTop: "10px" }}>
//           <h3>зураг орж ирлээ</h3>
//           <img src={image} alt="Uploaded" style={{ maxWidth: "1000px" }} />
//         </div>
//       )}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default ContentGet;
