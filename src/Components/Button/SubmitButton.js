import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";
import colors from "../../config/colors";


function SubmitButton({ title,color = "secondary",onPress }) {
 
  return <AppButton title={title} onPress={onPress} color="blue"
     />;
}

export default SubmitButton;
