"use client";

import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { Button, Callout, TextField } from "@radix-ui/themes";

interface IssueForm {
  title: string;
  description: string;
}

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error} </Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-5"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues/", data);
            router.push("/issues");
          } catch (error) {
            setError("An Unexpected Error Occurred");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input {...register("title")} placeholder="Title" />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default page;
