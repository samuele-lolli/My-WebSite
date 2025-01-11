"use client";
import CMS from "decap-cms";

export default function AdminPage() {
  if (typeof window !== "undefined") {
    CMS.init();
  }
  return <div>Loading CMS...</div>;
}
