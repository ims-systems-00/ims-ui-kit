const BodyText = (props) => {
  return (
    <>
      <p>
        Paragraph Tag:
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        minima voluptas nemo qui eveniet earum deleniti. Doloremque earum quo
        reiciendis eius quae saepe voluptatem veniam repellendus. Quidem ipsam
        cumque placeat. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Repellat minima voluptas nemo qui eveniet earum deleniti.
        Doloremque earum quo reiciendis eius quae saepe voluptatem veniam
        repellendus. Quidem ipsam cumque placeat.
      </p>
      <br></br>
      <p className="text-muted">
        Muted Paragraph Tag:
        <br />
        this is an example of muted text, this is an example of muted text, this
        is an example of muted text, this is an example of muted text,this is an
        example of muted text, this is an example of muted text, this is an
        example of muted text, this is an example of muted text, this is an
        example of muted text,this is an example of muted text, this is an
        example of muted text, this is an example of muted text, this is an
        example of muted text, this is an example of muted text,this is an
        example of muted text
      </p>
      <br /> <br />
      <p className="subtitle-primary">
        Subtitle Primary:
        <br />
        this is an example of subtitle primary, this is an example of subtitle
      </p>
      <br />
      <span className="subtitle-secondary">
        Subtitle secondary:
        <br />
        this is an example of subtitle primary, this is an example of subtitle
      </span>
    </>
  );
};
export default BodyText;
BodyText.parameters = {
  docs: {
    description: {
      story: `
Followings are some examples of how to use body texts in the UI.
`,
    },
  },
};
