import React from "react";
import { Field } from "rc-field-form";
import { twMerge } from "tailwind-merge";

const FormItem = ({ name = "", children, className, ...props }) => {
    return (
        <Field name={name} {...props} validateTrigger={["onBlur", "onChange"]}>
            {(control, meta, form) => {
                return (
                    <div className={twMerge("w-full", className)}>
                        {React.cloneElement(children, {
                            ...control,
                        })}

                        {meta.errors &&
                            meta.errors.map((error, i) => (
                                <div className="text-sm text-red-600" key={i}>
                                    {error}
                                </div>
                            ))}
                    </div>
                );
            }}
        </Field>
    );
};

export default FormItem;
