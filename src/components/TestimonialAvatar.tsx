"use client";
import Image from "next/image";
import { useState } from "react";

/** Only attach a portrait supplied for the named person. */
export default function TestimonialAvatar({ name, photo, large = false }: { name: string; photo?: string; large?: boolean }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").slice(0, 2).map((part) => part[0]).join("");
  return <span className={`testimonial-avatar ${large ? "large" : ""}`}>
    {photo && !failed ? <Image src={photo} alt={`Retrato de ${name}`} fill sizes={large ? "96px" : "56px"} onError={() => setFailed(true)} /> : <span aria-label={name}>{initials}</span>}
  </span>;
}
