import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printng the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler} className="border-2 p-2 m-2 rounded">
        <label htmlFor="firstname">First Name</label>
        <br />
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Viren"
          value={formData.firstname}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        />
        <br />

        <label htmlFor="lastname">Last Name</label>
        <br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Vora"
          value={formData.lastname}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        />
        <br />

        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="virenvora123@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        />
        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="A-52"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        />
        <br />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Surat"
          value={formData.city}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        />
        <br />

        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Gujarat"
          value={formData.state}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        />
        <br />

        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="395006"
          value={formData.postalCode}
          onChange={changeHandler}
          className="border-solid border-2 border-black-600 rounded w-full"
        />
        <br />

        <fieldset className="mt-4">
          <legend>By Email</legend>

          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <br />
            <div className="ml-2">
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <br />
            <div className="ml-2">
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <br />
            <div className="ml-2">
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <br />

          <div className="flex">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
            />
            <br />
            <div className="ml-2">
              <label htmlFor="pushEverything">Everything</label>
            </div>
          </div>

          <div className="flex">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Same as email"
              onChange={changeHandler}
            />
            <br />
            <div className="ml-2">
              <label htmlFor="pushEmail">Same as email</label>
            </div>
          </div>

          <div className="flex">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="No Push Notifications"
              onChange={changeHandler}
            />
            <br />
            <div className="ml-2">
              <label htmlFor="pushNothing">No push notifications</label>
            </div>
          </div>
        </fieldset>

        <button className="bg-blue-500 text-white py-2 px-4 font-bold rounded mt-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
