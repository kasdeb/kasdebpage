import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import bgc from "../post_2/bgc2.jpg";

let post_2 = {
  id: 2,
  new: false,
  postedDate: "08-18-2022",
  updatedDate: "08-18-2022",
  postedBy: "Kasper Debicki",
  title: "Velocity Cheat Sheet", // title with spaces
  url: "velocity-cheat-sheet", // should be the same as title but instead of spaces use dashes
  tags: ["#velocity", "#cheat", "#sheet"],
  backgroundImage: bgc, // tile image
  post: (
    <>
      <div className="post-text">
        <h3>Table of Contents</h3>
        <ul>
          <li>
            <a href="#if-elseif-else">
              If / ElseIf / Else
            </a>
          </li>
          <li>
            <a href="#multiple-values-from-one-field">
              Multiple values from one field
            </a>
          </li>
          <li>
            <a href="#last-day-of-previous-month">
              Last day of previous month
            </a>
          </li>
        </ul>

        <h3 id="if-elseif-else">
          If / ElseIf / Else
        </h3>

        <SyntaxHighlighter
          wrapLines={true}
          language="velocity"
          style={materialOceanic}
        >
          {`#if ($lead.Country == "Poland")
do something
#elseif ($lead.Country == "Germany")
do something else
#else
if none of above are true do this
#end

## else is not needed in the if/else statment

#if ($lead.Country == "Poland")
do something
#elseif ($lead.Country == "Germany")
do something else
#end

## == and .equals("") are the same

#if ($lead.Country.equals("Poland"))
do something
#elseif ($lead.Country.equals("Germany"))
do something else
#end

## contains

#if ($lead.cleanFirmName.contains("abc")) 
do something
#elseif ($lead.cleanFirmName.contains("efg")) 
do something else
#end

## logical or 

#if ($lead.Country == "Poland" ||  $lead.Country == "Germany")
do something
#else
do something else
#end

## logical and 

#if ($lead.Country == "Poland" &&  $lead.Country == "Germany")
do something
#else
do something else
#end
`}
        </SyntaxHighlighter>

        <h3 id="multiple-values-from-one-field">
          Multiple values from one field
        </h3>

        <SyntaxHighlighter
          wrapLines={true}
          language="velocity"
          style={materialOceanic}
        >
          {`#set ($fruits = \${lead.fieldWithAllFruits})  
#set ($arrayOfFruits = $fruits.split(','))
#if (!$fruits.isEmpty())
    #foreach ($name in $arrayOfFruits)
        <ul><li>$name</li></ul>
    #end
    #else
    No Fruits  
#end`}
        </SyntaxHighlighter>

        <h3 id="last-day-of-previous-month">
          Last day of previous month
        </h3>

        <SyntaxHighlighter
          wrapLines={true}
          language="velocity"
          style={materialOceanic}
        >
          {`#set ($cal = $date.calendar) 
$cal.add(2, -1) 
$cal.set(5, $cal.getActualMaximum(5)) 
$date.format('MM-dd-yyyy', $cal)`}
        </SyntaxHighlighter>
      </div>
    </>
  )
};
export default post_2;
