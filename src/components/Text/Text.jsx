import React from "react";
import classNames from "classnames";
import mouseHelper from "~/core/helpers/MouseHelper";
import "./Text.scss";

export const TextVariantOptions = [
  "big-text",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "normal"
];
export const TextTransformOptions = ["uppercase", "lowercase", "capitalize"];
export const FontWeightOptions = ["normal", "bold", "lighter"];
export const ColorOptions = ["primary", "white", "dark", "light"];
export const FontFamilyOptions = ["cormorant-upright", "inter"];


export const TextProps = {
  tag: undefined,
  variant: TextVariantOptions,
  className: "",
  color: ColorOptions,
  textTransform: TextTransformOptions,
  font: FontFamilyOptions,
  fontWeight: FontWeightOptions,
  href: "",
  mouseTarget: false
};

const Text = React.forwardRef(
  (
    {
      tag,
      children,
      className,
      color,
      variant,
      font,
      fontWeight,
      textTransform,
      mouseTarget,
      ...props
    },
    ref
  ) => {
    const TagElement = tag || "h1";
    return (
      <TagElement
        {...props}
        ref={ref}
        className={classNames(
          `text-${variant}`,
          `color-${color}`,
          textTransform ? `text-${textTransform}` : "",
          fontWeight ? `weight-${fontWeight}` : "",
          mouseHelper.addTargetTrigger(mouseTarget),
          font,
          className
        )}
      >
        {children}
      </TagElement>
    );
  }
);

Text.defaultProps = {
  tag: "h1",
  variant: "h1",
  className: "",
  color: "dark",
  font: "inter"
};

Text.displayName = "Text";

export default Text;
