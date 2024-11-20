import React from "react";

// Define the shape of the configuration object
interface UsePreRenderProcessingConfig {
  src?: string; // Optional source string
  generateLink?: (storageInfo: any) => Promise<string>; // Optional function to generate the link
  storageInfo?: any; // Optional storage information
}

// Define the return type of the hook
interface UsePreRenderProcessingResult {
  link: string | undefined; // Link can be a string or undefined
}

// Custom hook
export default function usePreRenderProcessing(
  config: UsePreRenderProcessingConfig
): UsePreRenderProcessingResult {
  const [link, setLink] = React.useState<string | undefined>(config.src);

  React.useEffect(() => {
    async function _prepareSource() {
      /**
       * We are trying to generate the link with some meta data as a second step
       * if src is not provided. If the data can't generate a link, it will render
       * the empty placeholder. This feature is useful if someone wants to generate
       * image src/link based on runtime through a backend server.
       */
      if (!config.src) {
        try {
          if (
            !config.generateLink ||
            typeof config.generateLink !== "function"
          ) {
            throw Error("link generator function must be supplied");
          }
          const generatedLink = await config.generateLink(config.storageInfo);
          if (!generatedLink) {
            throw new Error(
              "link generator function must return a valid link or else provide a valid image source"
            );
          }
          setLink(generatedLink);
        } catch (err) {
          setLink(
            "https://assets.imssystems.tech/images/system/avatar-placeholder.jpg"
          );
          console.log(err);
        }
      }
    }

    _prepareSource();

    return () => {};
  }, [config.generateLink, config.src]); // Added config.src as a dependency

  return {
    link,
  };
}
