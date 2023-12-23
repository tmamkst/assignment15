import React, { useState } from "react";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import NumberInput from "./NumberInput";
import FileInput from "./FileInput";
import DateTimePicker from "./DateTimePicker";

const Form = () => {
  const [textValue, setTextValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [fileValue, setFileValue] = useState(null);
  const [dateTimeValue, setDateTimeValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Loading a data:", {
      textValue,
      emailValue,
      passwordValue,
      numberValue,
      fileValue,
      dateTimeValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {}
      <TextInput
        label="Text Input"
        placeholder="Enter text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />

      {}
      <EmailInput
        label="Email Input"
        placeholder="Enter email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />

      {}
      <PasswordInput
        label="Password Input"
        placeholder="Enter password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />

      {}
      <NumberInput
        label="Number Input"
        placeholder="Enter number"
        value={numberValue}
        onChange={(e) => setNumberValue(e.target.value)}
      />

      {}
      <FileInput
        label="File Input"
        onChange={(e) => setFileValue(e.target.files[0])}
      />

      {}
      <DateTimePicker
        label="Date & Time Picker"
        value={dateTimeValue}
        onChange={(e) => setDateTimeValue(e.target.value)}
      />

      {}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComp;
