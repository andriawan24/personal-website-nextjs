"use client";

import React, { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Control,
  Field,
  Form,
  Label,
  Message,
  Submit,
} from "@radix-ui/react-form";
import { createTags, updateTags } from "../../actions";
import { useFormState } from "react-dom";
import { number } from "zod";

type Params = {
  value: string;
  id: number;
};

export default function TagForm(params: Params) {
  const [state, action] = useFormState(updateTags, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.message == "success") {
      router.replace("/admin/tags");
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
