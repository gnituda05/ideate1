import axios from "axios";

interface FormData {
  name: string;
  email: string;
  services: string;
  company: string;
  message: string;
}

const submitForm = async (formData: FormData) => {
  const response = await axios.post(
    "https://contact-ccy0.onrender.com/contact/submit",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export default submitForm;
