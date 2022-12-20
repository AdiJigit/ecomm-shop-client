import React, { useState} from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
import bcrypt from 'bcryptjs'
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {


  const navigate = useNavigate()

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  console.log(userInfo)
  const userOldPass = userInfo.password
  console.log(userOldPass)

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rNewPassword, setRNewPassword] = useState("");

  const updateHandler = async(e) => {
    e.preventDefault()

    async function compareIt(oldPassword){
      const validPassword = await bcrypt.compare(oldPassword, userOldPass);

      //check old password is correct
      if (validPassword !== true) {
        toast.error("The old password is not correct!");
        return;
      }

      //if new password === retype new password
      if (newPassword === rNewPassword) {
        try {

          const {data} = await axios.put(process.env.SERVER_URI + "/api/users/update", {
            _id: userInfo._id,
            newPassword,
          });

          localStorage.removeItem("userInfo", JSON.stringify(data));
          toast.success("Password updated successfully!");
          navigate("/login");
        } catch (error) {
          toast.error("Password not updated!");
        }
      } else {
        toast.error("Password doesn't match!");
      }
    }
    compareIt(oldPassword)
  }

  return (
    <>
      <div className="hidden sm:block f-container cp-container">
        <div className="f-row">
          <div className="f-formGroups">
            <form onSubmit={updateHandler}>
              <h2 className="f-title tracking-widest">Change Password</h2>
              <div className="f-formGroup">
                <label htmlFor="o_password" className="f-label">
                  OLD PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setOldPassword(e.target.value)}
                  id="o_password"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formGroup">
                <label htmlFor="password" className="f-label">
                  NEW PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  id="password"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formGroup">
                <label htmlFor="password" className="f-label">
                  RETYPE NEW PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setRNewPassword(e.target.value)}
                  id="r_password"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formBtn">
                <button className="f-btn">UPDATE PASSWORD</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* MOBILE STYLE */}
      <div className="sm:hidden px-2">
        <div>
          <div>
            <form onSubmit={updateHandler}>
              <h2 className="f-title">Change Password</h2>
              <div className="font-bold f-formGroup">
                <label htmlFor="o_password" className="f-label">
                  OLD PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setOldPassword(e.target.value)}
                  id="o_password"
                  className="f-input"
                  required
                />
              </div>
              <div className="font-bold f-formGroup">
                <label htmlFor="password" className="f-label">
                  NEW PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  id="password"
                  className="f-input"
                  required
                />
              </div>
              <div className="font-bold f-formGroup">
                <label htmlFor="password" className="f-label">
                  RETYPE NEW PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setRNewPassword(e.target.value)}
                  id="r_password"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formBtn">
                <button className="f-btn">UPDATE PASSWORD</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
