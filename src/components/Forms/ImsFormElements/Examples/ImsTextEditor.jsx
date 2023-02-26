import React from "react";
import Button from "../../../Buttons/ButtonBase";
import ImsTextEditorBase from "../ImsTextEditor";
const ImsTextEditor = ({}) => {
  const [content, setContent] = React.useState("");
  const handleChange = (e) => setContent(e);
  const reset = () => setContent("");
  return (
    <>
      <Button color="danger" size="sm" onClick={reset}>
        Reset editor
      </Button>
      <ImsTextEditorBase
        label="Label Text"
        placeholder="Placeholder Text"
        onChange={(e) => handleChange(e.currentTarget.value)}
        mentionSuggestions={[
          {
            _id: "182973aSJLsddkhsd",
            name: "Reyad Hossain",
            profileImageSrc: "https://picsum.photos/200/300",
          },
          {
            _id: "182973sadadkhsd",
            name: "Samin israr",
            profileImageSrc: "https://picsum.photos/200/300",
          },
        ]}
        linkGeneratorFn={() => "https://picsum.photos/200/300"}
        // value={JSON.stringify({
        //   blocks: [
        //     {
        //       key: "940qq",
        //       text: "In this place prepopulated formated text has been added",
        //       type: "header-three",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "9ksns",
        //       text: " ",
        //       type: "atomic",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [{ offset: 0, length: 1, key: 0 }],
        //       data: {},
        //     },
        //     {
        //       key: "a5npu",
        //       text: "This ia a paragrapah with lorem lines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti totam eius nesciunt commodi deserunt perspiciatis, adipisci expedita neque voluptatem a distinctio aliquam doloribus possimus animi. Illo nobis facilis quae iure!",
        //       type: "unstyled",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "ds21r",
        //       text: "Don't judge a book by it's cover",
        //       type: "blockquote",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "1f9ii",
        //       text: "class Main{",
        //       type: "code-block",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "ecve0",
        //       text: "    constructor(){};",
        //       type: "code-block",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "de4j6",
        //       text: "}",
        //       type: "code-block",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "8f3gm",
        //       text: "",
        //       type: "code-block",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "88v4g",
        //       text: "",
        //       type: "unstyled",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //     {
        //       key: "3jp3m",
        //       text: " ",
        //       type: "atomic",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [{ offset: 0, length: 1, key: 1 }],
        //       data: {},
        //     },
        //     {
        //       key: "2g0re",
        //       text: "",
        //       type: "unstyled",
        //       depth: 0,
        //       inlineStyleRanges: [],
        //       entityRanges: [],
        //       data: {},
        //     },
        //   ],
        //   entityMap: {
        //     0: { type: "divider", mutability: "IMMUTABLE", data: {} },
        //     1: { type: "image", mutability: "IMMUTABLE", data: {} },
        //   },
        // })}
        value={content}
      />
    </>
  );
};

export default ImsTextEditor;
