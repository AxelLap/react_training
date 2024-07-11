//@ts-nocheck
"use client";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import styles from "./3.module.css";

const badgeVariant = cva(
  "inline-flex text-sm items-center rounded-md font-medium w-fit",
  {
    variants: {
      size: {
        default: "px-1.5 py-0.5",
        lg: "px-2 py-1",
      },
      color: {
        red: "bg-red-500/15 text-red-700",
        green: "bg-green-500/15 text-green-700",
        purple: "bg-purple-500/15 text-purple-700",
      },
    },
    defaultVariants: {
      size: "default",
      color: "red",
    },
  }
);

const Badge = ({ size, variant, children }) => {
  return (
    <span className={badgeVariant({ size: size, color: variant })}>
      {children}
    </span>
  );
};

export default function App() {
  return (
    <div className="grid grid-cols-4 flex-col gap-2 bg-white p-8 text-black">
      <p className="code">Size / color</p>
      <p className="code">Green</p>
      <p className="code">Red</p>
      <p className="code">Purple</p>
      <p className="code">lg</p>
      <Badge size="lg" variant="green">
        New
      </Badge>
      <Badge size="lg" variant="red">
        New
      </Badge>
      <Badge size="lg" variant="purple">
        New
      </Badge>
      <p className="code">default</p>
      <Badge size="default" variant="green">
        New
      </Badge>
      <Badge size="default" variant="red">
        New
      </Badge>
      <Badge size="default" variant="purple">
        New
      </Badge>
    </div>
  );
}
