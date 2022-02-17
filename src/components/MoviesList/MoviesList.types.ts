import React from "react";

export type MoviesListProp = {
  children?: React.ReactNode
  data: { 
    id: string;
    title: string;
    poster: string;
    overview?: string;
    release_date?: number;
  }[]
}

