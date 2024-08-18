"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Control,
  Field,
  Form,
  Label,
  Message,
  Submit,
} from "@radix-ui/react-form";
import { useFormState } from "react-dom";
import { updateStack } from "../../actions";
import Image from "next/image";

type Params = {
  value: string;
  image_url: string;
  id: number;
};

export default function StackForm(params: Params) {
  const [state, action] = useFormState(updateStack, undefined);
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined,
  );

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (state?.message == "success") {
      router.replace("/admin/stacks");
      router.refresh();
    }
  }, [state, router]);

  return (
    <Form action={action} className="max-w-sm">
      <Field name="name" className="flex flex-col">
        <Field name="id" className="hidden">
          <Control value={params.id} />
        </Field>

        <Label className="text-lg font-bold text-color-background-dark">
          Name
        </Label>
        <Control
          className="px-4 py-2 mt-2 border-2 border-gray-800 rounded-md"
          placeholder="Enter tag name"
          defaultValue={params.value}
        />
        {state?.errors?.name && (
          <Message className="text-red-600 font-semibold text-sm mt-1">
            {state.errors.name}
          </Message>
        )}
      </Field>

      <Field name="image" className="mt-4 flex flex-col">
        <Label className="text-lg font-bold text-color-background-dark">
          Stack Logo
        </Label>
        <Image
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : params.image_url
          }
          width={500}
          height={500}
          className="w-64 h-64 object-cover rounded-sm"
          loading="lazy"
          alt="Preview image for the stack"
        />
        <Control
          className="mt-2 w-full bg-color-background-button-dark text-white font-medium rounded-md file:cursor-pointer file:bg-color-background-dark file:font-semibold file:text-white file:px-3 file:py-2 file:rounded-md file:border-none"
          type="file"
          placeholder="Choose an image"
          accept="image/*"
          onChange={onImageChange}
        />
        {state?.errors?.image && (
          <Message className="text-red-600 font-semibold text-sm mt-1">
            {state.errors.image}
          </Message>
        )}
      </Field>

      {state?.message && (
        <h3 className="text-red-600 font-semibold text-sm mt-4">
          {state.message}
        </h3>
      )}

      <Submit className="mt-4 px-4 py-2 bg-color-background-card-dark text-white rounded-md">
        Save
      </Submit>
    </Form>
  );
}
