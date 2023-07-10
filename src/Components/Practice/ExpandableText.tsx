import { Children, useState } from "react";

function ExpandableText({}) {
  interface Props {
    children : string;
    maxchars?: number

  }

  const ExpandableText = ({children, maxchars=100}:Props) => {};

  return(
     <div>{Children}</div>>
  )
}
export default ExpandableText;
