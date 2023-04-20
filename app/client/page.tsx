"use client";

import swr from "swr";

const url = "https://api.quotable.io/random?tags=technology";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function GetQuote() {
  const { data, error, isLoading } = swr(url, fetcher);
  if (error) {
    return <div>Error</div>;
  }
  if (isLoading)
    return (
      <div className="text-4xl font-semibold ">Loading... Please wait!</div>
    );
  return (
    <div className="bg-sky-300 h-screen">
      <h1 className="text-center font-bold text-6xl text-white p-8 bg-blue-900 mb-11">
        Tech Client
      </h1>
      <div className="tet-3xl font-semibold text-center m-auto p-8 mx-96 rounded-2xl text-white cursor-pointer bg-cyan-700 duration-300 hover:translate-y-2">
        {` Quote: ${data.content}`}
      </div>
    </div>
  );
}
export default GetQuote;
