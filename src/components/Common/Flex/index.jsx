import { twMerge } from "tailwind-merge";

const Flex = ({
  children,
  className,
  as: Tag = "div",
  gap = 0,
  justify = "center",
  align = "center",
  direction = "row",
  ...props
}) => {
  const justifyClass = `justify-${justify}`;
  const alignClass = `items-${align}`;

  const gapStyle = Array.isArray(gap)
    ? gap.map((g) => `${g}px`).join(" ")
    : `${gap}px`;

  return (
    <Tag
      className={twMerge(
        `flex ${justifyClass} ${alignClass} flex-${direction}`,
        className,
      )}
      style={{ gap: gapStyle }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Flex;
