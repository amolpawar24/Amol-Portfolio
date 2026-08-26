/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export function useProjectSearch(projects: any[]) {
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return { query, setQuery, filtered };
}