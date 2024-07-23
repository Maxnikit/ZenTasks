"use client";

import AddTaskForm from "@/components/webapp/AddTaskForm/AddTaskForm";
import { useState } from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1>WebApp Header</h1>
      <AddTaskForm />
    </div>
  );
}
