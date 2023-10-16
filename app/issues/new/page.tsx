"use client";

import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { Button, TextField } from "@radix-ui/themes";

import React from "react";

const page = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default page;
