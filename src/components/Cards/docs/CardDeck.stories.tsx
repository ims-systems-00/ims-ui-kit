import { Meta, StoryFn } from "@storybook/react/*";
import CardDeck from "../CardDeckBase";
import React from "react";

export default {
  title: "components/CardDeck",
  component: CardDeck,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardDeck>;

// Define the type for the story
const Template: StoryFn<typeof CardDeck> = (args: any) => (
  <CardDeck {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardDeck };
