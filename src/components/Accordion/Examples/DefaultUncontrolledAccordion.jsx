import React from "react";
import UncontrolledAccordion from "../UncontrolledAccordionBase";
import AccordionItem from "../AccordionItemBase";
import AccordionHeader from "../AccordionHeaderBase";
import AccordionBody from "../AccordionBodyBase";

const DefaultUncontrolledAccordion = () => {
  return (
    <UncontrolledAccordion defaultOpen="1">
      <AccordionItem>
        <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId="1">
          <strong>This is the first item's accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId="2">
          <strong>This is the second item's accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId="3">
          <strong>This is the third item's accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
};

export default DefaultUncontrolledAccordion;
