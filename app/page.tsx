import { useEffect, useState } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Email from "../components/Email";
import Textarea from "../components/Textarea";
import Password from "../components/Password";

export default function Home() {
  return (
    <div>
      <Button></Button>
      <Text />
      <Email></Email>
      <Textarea />
      <Password></Password>
    </div>
  );
}
