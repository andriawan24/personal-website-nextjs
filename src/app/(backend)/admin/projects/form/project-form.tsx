"use client";

import React, { ChangeEvent, useActionState, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import {
  Control,
  Field,
  Form,
  Label,
  Message,
  Submit,
} from "@radix-ui/react-form";
import Image from "next/image";
import { createProject } from "../actions";

export default function ProjectForm() {
  const [state, action] = useFormState(createProject, undefined);
  const router = useRouter();
  const [selectedThumbnailImage, setSelectedThumbnailImage] = useState<
    File | undefined
  >(undefined);
  const [selectedFullImage, setSelectedFullImage] = useState<File | undefined>(
    undefined,
  );

  const onFullImageChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFullImage(e.target.files[0]);
    }
  };

  const onThumbnailImageChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedThumbnailImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (state?.message == "success") {
      router.replace("/admin/projects");
      router.refresh();
    }
  }, [state, router]);

  return (
    <Form action={action} className="w-full">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col flex-1">
          <Field name="title" className="flex flex-col">
            <Label className="text-lg font-bold text-color-background-dark">
              Title
            </Label>
            <Control
              className="px-4 py-2 mt-2 border-2 border-gray-800 rounded-md"
              placeholder="Enter project title"
            />
            {state?.errors?.title && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.title}
              </Message>
            )}
          </Field>

          <Field name="description" className="flex flex-col mt-4">
            <Label className="text-lg font-bold text-color-background-dark">
              Brief Description
            </Label>
            <textarea
              className="w-full px-4 py-2 mt-2 border-2 border-gray-800 rounded-md text-sm min-h-24"
              placeholder="Enter brief description of the project"
              name="description"
            ></textarea>
            {state?.errors?.description && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.description}
              </Message>
            )}
          </Field>

          <Field name="github_link" className="flex flex-col mt-4">
            <Label className="text-lg font-bold text-color-background-dark">
              Github Link
            </Label>
            <Control
              className="px-4 py-2 mt-2 border-2 border-gray-800 rounded-md"
              placeholder="Enter github link"
            />
            {state?.errors?.github_link && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.github_link}
              </Message>
            )}
          </Field>

          <Field name="demo_link" className="flex flex-col mt-4">
            <Label className="text-lg font-bold text-color-background-dark">
              Demo Link
            </Label>
            <Control
              className="px-4 py-2 mt-2 border-2 border-gray-800 rounded-md"
              placeholder="Enter demo link"
            />
            {state?.errors?.demo_link && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.demo_link}
              </Message>
            )}
          </Field>
        </div>
        <div className="flex flex-col flex-1">
          <Field name="development_date" className="flex flex-col">
            <Label className="text-lg font-bold text-color-background-dark">
              Development Date
            </Label>
            <Control
              className="px-4 py-2 mt-2 border-2 border-gray-800 rounded-md"
              placeholder="Enter development date"
            />
            {state?.errors?.development_date && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.development_date}
              </Message>
            )}
          </Field>

          <Field name="roles" className="flex flex-col mt-4">
            <Label className="text-lg font-bold text-color-background-dark">
              Roles
            </Label>
            <Control
              className="px-4 py-2 mt-2 border-2 border-gray-800 rounded-md"
              placeholder="Enter roles"
            />
            {state?.errors?.roles && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.roles}
              </Message>
            )}
          </Field>

          <Field name="full_image" className="mt-4 flex flex-col">
            <Label className="text-lg font-bold text-color-background-dark">
              Full Image
            </Label>
            {selectedFullImage && (
              <Image
                src={URL.createObjectURL(selectedFullImage)}
                width={500}
                height={500}
                className="w-64 h-64 object-cover rounded-sm"
                loading="lazy"
                alt="Preview image for the stack"
              />
            )}
            <Control
              className="mt-2 w-full bg-color-background-button-dark text-white font-medium rounded-md file:cursor-pointer file:bg-color-background-dark file:font-semibold file:text-white file:px-3 file:py-2 file:rounded-md file:border-none"
              type="file"
              placeholder="Choose an image"
              accept="image/*"
              onChange={onFullImageChanged}
            />
            {state?.errors?.full_image && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.full_image}
              </Message>
            )}
          </Field>

          <Field name="thumbnail_image" className="mt-4 flex flex-col">
            <Label className="text-lg font-bold text-color-background-dark">
              Thumbnail Image
            </Label>
            {selectedThumbnailImage && (
              <Image
                src={URL.createObjectURL(selectedThumbnailImage)}
                width={500}
                height={500}
                className="w-64 h-64 object-cover rounded-sm"
                loading="lazy"
                alt="Preview image for the stack"
              />
            )}
            <Control
              className="mt-2 w-full bg-color-background-button-dark text-white font-medium rounded-md file:cursor-pointer file:bg-color-background-dark file:font-semibold file:text-white file:px-3 file:py-2 file:rounded-md file:border-none"
              type="file"
              placeholder="Choose an image"
              accept="image/*"
              onChange={onThumbnailImageChanged}
            />
            {state?.errors?.thumbnail_image && (
              <Message className="text-red-600 font-semibold text-sm mt-1">
                {state.errors.thumbnail_image}
              </Message>
            )}
          </Field>
        </div>
        <div className="w-1/3"></div>
      </div>

      {state?.message && (
        <h3 className="text-red-600 font-semibold text-sm mt-4">
          {state.message}
        </h3>
      )}

      <Submit className="mt-4 px-12 py-2 bg-color-background-card-dark text-white rounded-md">
        Save
      </Submit>
    </Form>
  );
}
