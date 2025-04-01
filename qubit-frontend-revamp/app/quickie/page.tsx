"use client";
import React, { useEffect } from 'react';

function Page() {
  useEffect(() => {
    window.location.href = "https://qubitquickie.myshopify.com/";
  }, []);

  return <div>Redirecting...</div>;
}

export default Page;
