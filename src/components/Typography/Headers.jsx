const Headers = (props) => {
  return (
    <>
      <h1>h1. this a iMS Headline </h1>
      <h2>h2. this a iMS Headline </h2>
      <h3>h3. this a iMS Headline </h3>
      <h4>h4. this a iMS Headline </h4>
    </>
  );
};
export default Headers;
Headers.parameters = {
  docs: {
    description: {
      story: `
It is recomended to use the only 4 tags (h1-h4) how it's shown in the examples. Ignore other (h4-h6) tags whilst you are builing the UI.
`,
    },
  },
};
