
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const LoginTest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form data changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("https://127.0.0.1:8000/api/users");
      const users = response.data["hydra:member"];

      const matchedUser = users.find(
        (user) => user.email === formData.email
      );

      if (matchedUser) {
        const isPasswordMatched = await bcrypt.compare(
          formData.password,
          matchedUser.password
        );

        if (isPasswordMatched) {
          navigate("/contact");
        } else {
          console.log("Mot de passe incorrect");
        }
      } else {
        console.log("Adresse e-mail non trouvée");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginTest;

// Pour la saisie du compte utilisateur aller sur https://www.bcrypt.fr/
