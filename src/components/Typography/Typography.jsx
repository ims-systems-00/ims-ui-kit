import PropTypes from "prop-types";
/**
 * Typography container, most of the font with available size and colors listed bellow,
 * it is recomended to use the tags and classes likewise how it's shown in the examples.
 */
const Typography = ({}) => {
  return (
    <>
      <h1>h1. this a iMS Headline </h1>
      <h2>h2. this a iMS Headline </h2>
      <h3>h3. this a iMS Headline </h3>
      <h4>h4. this a iMS Headline </h4>
      <br></br>
      <p>
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
        this is an example of muted text, this is an example of muted text, this
        is an example of muted text, this is an example of muted text,this is an
        example of muted text, this is an example of muted text, this is an
        example of muted text, this is an example of muted text, this is an
        example of muted text,this is an example of muted text, this is an
        example of muted text, this is an example of muted text, this is an
        example of muted text, this is an example of muted text,this is an
        example of muted text
      </p>
    </>
  );
};
Typography.propTypes = {};
export default Typography;
