// Ganti dengan CLOUD_NAME kamu (drx134s6c)
const CLOUD_NAME = "drx134s6c";
const UPLOAD_PRESET = "undangin_upload";

export async function uploadFile(file) {
  if (!file) return null;
  
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  
  // PENTING: Set ke auto agar bisa terima gambar & musik
  formData.append("resource_type", "auto");
  
  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`, {
      method: "POST",
      body: formData
    });
    
    if (!response.ok) throw new Error("Gagal Upload");
    
    const data = await response.json();
    return data.secure_url;
    
  } catch (error) {
    console.error("Cloudinary Error:", error);
    alert("Gagal Upload: " + error.message);
    return null;
  }
}
