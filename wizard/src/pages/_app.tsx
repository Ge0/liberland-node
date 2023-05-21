import Layout from "@/components/Layout";
import React from "react";

export default function WizardApp({
  Component,
  pageProps
} : {
  Component: React.FC<any>,
  pageProps: Record<string, any>
}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}