import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ToastContainer } from "@horizin/blueprint-system";

/* --- FormThreadPost : Component --- */
export const FormThreadPost = ({ thread, ...props }) => {
  /* --- State  --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Submit : Action  --- */
  const onSubmit = async (values) => {
    try {
      console.log(thread, "thread object");
      const msg = await thread.post(values.post);
      console.log(msg, "msg");
      ToastContainer.show({ message: "Post Create" });
    } catch (error) {
      console.log(error);
    }
  };

  /* --- Error : Effect --- */

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="post"
        as="textarea"
        label="Post"
        register={register}
        errors={errors}
        sx={{}}
      />

      <Atom.Button white widthFill sm mt3 sx={{ variant: "form.buttons" }}>
        {props.label}
      </Atom.Button>
    </form>
  );
};

FormThreadPost.defaultProps = {
  label: "Post",
  sxButton: {
    mt: 2,
    width: "100%",
  },
};
